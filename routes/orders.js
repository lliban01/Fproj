const db = require("../models")

module.exports = (app) => {
    
    app.get("/api/orders/", (req, res) => {
        db.Order.findAll({})
        .then((data) => res.json(data))
    })
    
    app.get("/api/orders/:id", (req, res) => {
        db.Order.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
        
    app.post("/api/orders/", (req, res) => {
        console.log(req.body)
        db.Order.create({
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    })

    app.delete("/api/orders/:id", (req, res) => {
        db.Orders.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    })
    })
}