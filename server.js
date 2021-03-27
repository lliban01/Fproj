const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes.js")(app)


db.sequelize.sync(  )
.then((req) => {
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
})