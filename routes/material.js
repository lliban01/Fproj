const db = require("../models")

module.exports = (app) => {
    
    app.get("/api/materials/", (req, res) => {
        db.Material.findAll({})
        .then((data) => res.json(data))
    })
    
    app.get("/api/materials/:id", (req, res) => {
        db.Material.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
        
    app.post("/api/materials/:id", (req, res) => {
        console.log(req.body)
        db.Material.create({
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    })

    app.delete("/api/materials/:id", (req, res) => {
        db.Material.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    })
    })
}