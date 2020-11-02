const mongoose = require("mongoose")

// connect to a database, name of database after localhost/
mongoose.connect("mongodb://localhost/mongotut_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once("open", function () {
    console.log("Database connected successfully")
}).on("error ", function (err) {
    console.log("Database not connected successfully")
    console.log(err)
})

