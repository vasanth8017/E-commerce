const mongoose = require("mongoose");

const db ="mongodb+srv://vasanthakumar8017:1234@cluster0.qjnmkan.mongodb.net/?retryWrites=true&w=majority ";

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("Could not connect to database", error);
    });

mongoose.set("useCreateIndex", true);
