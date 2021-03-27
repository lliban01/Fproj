const db = require("../models")

module.exports = (app) => {
    app.get("/api/clients/", (req, res) => {
        db.Client.findAll({})
        .then((dbClient) => res.json(dbClient))
    })

    app.get("/api/clients/:id", (req, res) => {
        db.Client.findAll({
            where: {
                id: req.params.id
            }
        }).then((dbClient) => {
            res.json(dbClient)
        })
    })

    app.post("/api/clients/", (req, res) => {
        console.log(req.body)
        db.Client.create({
          fullName: req.body.fullName,
          address: req.body.address,
          email: req.body.email
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((dbClient) => res.json(dbClient))
        
    })

    app.delete("/api/clients/:id", (req, res) => {
        db.Client.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbClient) => { 
            res.json(dbClient)
        })
    })
}