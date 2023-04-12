import express from "express";

const app = express()


app.get("/", (req, res) => {
    res.json({
        message: "Funcionando Gostosinho"
    })
})


var server_port = process.env.PORT || 5000;

app.listen(server_port, () => {
    console.log("Server Inicializado")
})