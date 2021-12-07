const express = require("express");

const { resolve } = require("path")

const app = express();

app.use((req, resp, next) => {
    if (req.headers["x-forwarded-proto"] === "https") {
        resp.redirect(`http://${req.hostname}${req.url}`);
    } else {
        next();
    }
})

app.use("/", express.static( resolve( __dirname, "./build") ) )

app.listen(process.env.PORT || 3000, (err) => {
    if (err) { return console.log(err) }
    console.log("O comando executado está reservado para o servidor Heroku. Execute o comando 'yarn dev' para rodá-lo localmente.")
})