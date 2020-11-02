const express = require("express")
const morgan = require("morgan")
const api = require("./routes")

const app = express()

app.use(morgan("dev"))

app.use(express.urlencoded({ extended: false }))
app.use("/api", api)

app.listen("3000", function () {
    console.log("Running on port 3000")
})
