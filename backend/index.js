const app = require("./app");
const express = require("express");
const path = require("path");

if (process.env.NODE_ENV === "production") {
    app.use(
        express.static(
            path.join(__dirname, "../frontend/build")
        )
    );
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname,
                "..",
                "frontend",
                "build",
                "index.html"
            )
        );
    });
} else {
    app.get("/", (req, res) => {
        res.send("API started...");
    });
}

const PORT = 3001;

app.listen(PORT, () => {
    console.log(
        `Server has started successfully in mode at port ${PORT}`
    );
});
