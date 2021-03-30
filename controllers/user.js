const db = require("../models")

module.exports = (app) => {
    
    app.get("/api/users/:id", (req, res) => {
        db.User.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
        
    app.post("/api/users/", (req, res) => {
        console.log(req.body)
        db.User.create({
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    })

    app.delete("/api/users/:id", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    })
    })
}