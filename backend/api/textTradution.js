const axios = require('axios');
const fetch = require("node-fetch")

module.exports = app => {
    const {User} = app.config.userModel

    const getTradution = async (req, res) => {
        const {existsOrError} = app.api.validation
        const params = { ...req.body }
        const word = params.palavra

        // const traducao = await fetch("https://libretranslate.com/translate", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         q: 'car',
        //         source: "auto",
        //         target: "pt", 
        //         format: "text",
        //         api_key: ""
        //     }),
        //     headers: { "Content-Type": "application/json" }
        // });
        // const resposta = await traducao.json()
        // console.log(resposta);

        // salvando a palavra no banco de dados
        email = params.email

        try {
            existsOrError(email, 'E-mail não informado')
            const userFromDB = await User.findOne({ email: email })
            if (!userFromDB) return res.status(400).send('Usuário não encontrado! Registre-se')

            userFromDB.words.push(word)
            console.log(userFromDB)

            userFromDB.save()
            .then(() => {
                res.status(204).send()
            }) 
            .catch((error) => {
                console.error('Erro ao inserir usuário:', error);
            });
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