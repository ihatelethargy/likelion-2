const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

app.use(bodyParser.json());

// import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);
// app.use('/user', )

// routes

app.get("/", (req, res) => {
    res.send("We are on home");
});

// connect db
dotenv.config();
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("mongoose connected");
    }
);
// mongoose.set(" ", true);

app.listen(4000);
