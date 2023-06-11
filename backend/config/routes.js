

module.exports = app => {

    app.post('/registrar', app.api.user.save)
    app.post('/login', app.api.auth.signin)

    app.post('/user/listaTextos', app.api.englishTexts.getTexts)
    app.post('/user/texto', app.api.textTradution.getTradution)
}