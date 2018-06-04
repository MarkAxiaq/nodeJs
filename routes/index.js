const express = require('express');

let routes = port => {
    let entryRouter = express.Router();
    entryRouter.route("/")
    .get((req, res) => {
        res.status(200).send(`Running on port ${port}`);
    });

    entryRouter.route("/ping")
    .get((req, res) => {
        res.status(200).send(`Pong`);
    });

    return entryRouter;
};

module.exports = routes;