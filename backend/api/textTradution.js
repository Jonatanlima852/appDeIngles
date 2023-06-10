const axios = require('axios');


module.exports = app => {
    const getTradution = async (req, res) => {

        const params = { ...req.body }
        const word = params.palavra

        const traducao = await axios("https://libretranslate.com/translate", {
            method: "POST",
            data: JSON.stringify({
                q: word,
                source: "auto",
                target: "pt",
                format: "text",
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
        });

        console.log(await traducao.data.translatedText);


        // salvando a palavra no banco de dados
        email = params.email

        try {
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.senha, 'Senha não informada')

            const userFromDB = await User.findOne({ email: email })

            if (!userFromDB) return res.status(400).send('Usuário não encontrado! Registre-se')

            const isMatch = bcrypt.compareSync(user.senha, userFromDB.password)
            if (!isMatch) return res.status(401).send('Email/Senha inválidos!')

            (_ => res.status(204).send())()

        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }







        // const encodedParams = new URLSearchParams();
        // encodedParams.set('q', `${word}`);
        // encodedParams.set('target', 'br');
        // encodedParams.set('source', 'en');

        // const options = {
        //     method: 'POST',
        //     url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //         'Accept-Encoding': 'application/gzip',
        //         'X-RapidAPI-Key': '016bcde189msh5a22fef414d5c6ep183433jsn2a67d8e08652',
        //         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        //     },
        //     data: encodedParams,
        // };

        // try {
        //     const response = await axios.request(options);
        //     console.log('oi')
        //     res.status(200).send(response.data.translations[0].translatedText);
        // } catch (error) {
        //     res.status(500).send(error)
        //     console.log(error.message)
        //     // console.error(error);
        // }
    }


    return { getTradution }
}