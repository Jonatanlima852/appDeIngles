const app = require('express')()
const consign = require('consign')


consign()
    .include('./config/database.js')
    .then('./config/userModel.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.connectToDatabase(); 

app.listen(4000, () => {
    console.log('Backend executando...')
})