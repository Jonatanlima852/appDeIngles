const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const {User} = app.config.userModel
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        // if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.senha, 'Senha não informada')
            existsOrError(user.confirmarsenha, 'Confirmação de Senha inválida')
            equalsOrError(user.senha, user.confirmarsenha,
                'Senhas não conferem')

            const userFromDB = await User.findOne({ email: user.email })
            .then((user) => {
              if(user) return res.status(400).send('Usuário já cadastrado! Realize o Login')
            })
            .catch((error) => {
              return res.status(500).send('Erro ao buscar usuário:', error);
            })
        } catch(msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.senha) 

        delete user.senha
        delete user.confirmarsenha

        const newUser = new User(user);

        newUser.save()
            .then(() => {
                console.log('Usuário inserido com sucesso');
            })
            .catch((error) => {
                console.error('Erro ao inserir usuário:', error);
            });

        (_ => res.status(204).send())()

        console.log(user)
    }

    return { save }
}