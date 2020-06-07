const jsController = (req, res) => {
        res.sendFile("app.js", { root: "./Views" })
}

module.exports = jsController;
