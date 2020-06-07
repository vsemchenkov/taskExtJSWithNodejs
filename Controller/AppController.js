const appController = (req, res) => {
    res.sendFile("index.html", { root: "./" })
}

module.exports = appController;
