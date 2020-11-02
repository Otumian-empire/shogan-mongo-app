const assert = require('assert')
const User = require("./models")
const bcrypt = require('bcrypt')
const mocha = require("mocha")


// takes title and function
describe("Create User Test", () => {

    it("create a new user", (done) => {
        const email = "johndoe4@email.com"
        const password = bcrypt.hashSync(email, 12)

        // create user object
        // save it
        const user = new User({
            email, password
        })

        user.save()
            .then(() => {
                // this will return true if user is created
                // so check if false to imply it is a new object
                assert(!user.isNew)
                done()
            })
            .catch(err => console.log(err))

    })
})