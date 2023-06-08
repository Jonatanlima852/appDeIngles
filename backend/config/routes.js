

module.exports = app => {

    app.post('/registrar', app.api.user.save)

}