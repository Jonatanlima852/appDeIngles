const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-node-js')

module.exports = app => {
    const { User } = app.config.userModel
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    
    const signin = async (req, res) => {
        const user = { ...req.body }
        try {
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.senha, 'Senha não informada')

            const userFromDB = await User.findOne({ email: user.email })
            
            if (!userFromDB) return res.status(400).send('Usuário não encontrado! Registre-se')

            const isMatch = bcrypt.compare(user.senha, userFromDB.password)
            if(!isMatch) return res.status(401).send('Email/Senha inválidos!')

        } catch(msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    return { signin }
}