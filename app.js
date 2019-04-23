const Express = require("express");
const App = Express();

//Sets the view engine template into ejs on all HTML files.
//for example, views/landing.ejs -> views/landing
App.set("view engine", "ejs");
//Sets to serve static files such as css, images, in a directory named "public"
App.use(Express.static("public"));

App.get("/", (req,res) => {
    res.render("landing");
})

App.listen(3003, () => {
    console.log("Server has started running.")
})
