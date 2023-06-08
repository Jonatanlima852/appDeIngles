const app = require('express')()
const consign = require('consign')


cosign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes')
    .into(app)

app.listen(4000, () => {
    console.log('Backend executando...')
})