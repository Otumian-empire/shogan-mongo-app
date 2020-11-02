const mongoose = require("mongoose")

// connect to a database, name of database after localhost/
mongoose.connect("mongodb://localhost/mongotut_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// very connection
mongoose.connection
    .once("open", function () {
        console.log("Database connected successfully")
    })
    .on("error ", function (err) {
        console.log("Database not connected successfully")
        console.log(err)
    })

// user schema Object
const userSchemaStructure = {
    password: String,
    email: String
}

// mongoose schema
const userSchema = new mongoose.Schema(userSchemaStructure)

// model
const User = mongoose.model("users", userSchema)


module.exports = User
