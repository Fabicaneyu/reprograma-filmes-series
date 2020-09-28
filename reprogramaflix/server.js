const app = require("./src/app")

//porta configurada para Heroku
const port = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Menina, o nosso app ta de pe! na porta "+ port)
})

