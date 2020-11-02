const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("./models")

router.get("/", function (req, res) {
    User.find()
        .then(resData => {
            return res.json({ "users": resData })
        })
        .catch(errData => {
            console.log(errData)
            return res.json({ errData })
        })
})

router.get("/:email", function (req, res) {
    const email = req.params.email

    User.findOne({ email })
        .then(resData => {
            return res.json({ "user": resData })
        })
        .catch(errData => {
            console.log(errData)
            return res.json({ errData })
        })
})

router.post("/", function (req, res) {
    let { email, password } = req.body

    password = bcrypt.hashSync(email, 12)

    const newUser = new User({ email, password })

    newUser.save()
        .then(() => {
            if (!newUser.isNew)
                return res.json({ "msg": "User created successfully" })

            return res.json({ "msg": "User created unsuccessfully" })
        })
        .catch(errData => {
            console.log(errData)
            return res.json({ errData })
        })

})

router.put("/:email", function (req, res) {
    const email = req.params.email
    const newEmail = req.body.newEmail

    User.findOneAndUpdate({ email }, { email: newEmail })
        .then(() => {
            return res.json({ "msg": "User updatd successfully" })
        })
        .catch(errData => {
            console.log(errData)
            return res.json({ errData })
        })
})

router.delete("/:email", function (req, res) {
    const email = req.params.email

    User.findOneAndDelete({ email })
        .then(() => {
            return res.json({ "msg": "User deleted successfully" })
        })
        .catch(errData => {
            console.log(errData)
            return res.json({ errData })
        })
})

router.delete("/", function (req, res) {

    User.remove()
        .then(() => {
            return res.json({ "msg": "Deleted Users successfully" })
        })
        .catch(errData => {
            console.log(errData)
            return res.json({ errData })
        })
})

module.exports = router 
