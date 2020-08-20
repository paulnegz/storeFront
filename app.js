var express = require("express");
var app = express()
app.set("view engine", "ejs");

app.get('*', (req, res) => {
    res.render("./index");
  })
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("My Personal Website Server Has Started!");
});
