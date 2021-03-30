const db = require("../models")

module.exports = (app) => {
    
    app.get("/api/paints/", (req, res) => {
        db.Paint.findAll({})
        .then((data) => res.json(data))
    })
    
    app.get("/api/paints/:id", (req, res) => {
        db.Paint.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
        
    app.post("/api/paints/:id", (req, res) => {
        console.log(req.body)
        db.Paint.create({
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    })

    app.delete("/api/paints/:id", (req, res) => {
        db.Paint.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    })
    })
}