

module.exports = app => {

    app.post('/registrar', app.api.user.save)
    app.post('/login', app.api.auth.signin)
}