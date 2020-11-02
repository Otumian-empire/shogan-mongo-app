const router = require("express").Router()
const bcrypt = require('bcrypt')
const { User } = require("./models")


router.get("/", function (req, res) {
    return res.json({ "message": "Hello" })
})

module.exports = { api: router }
