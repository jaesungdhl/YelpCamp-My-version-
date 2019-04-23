const Express = require("express");
const App = express();

App.set("view engine", "ejs");

App.get("/", (req,res) => {
    res.render("landing");
})

App.listen(3003);