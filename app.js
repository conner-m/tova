const app = require("express")()
const helmet = require("helmet")

app.use(helmet())
app.use(require("./controllers"))

app.set("view engine", "pug")

app.listen(process.env.PORT, () => {
    console.log("App listening..")
}) 