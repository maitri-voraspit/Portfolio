
var express= require("express");
var app= express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("index");
});


app.get("/card",function(req,res){
	res.render("card");
})
app.get("/logo",function(req,res){
	res.render("logo");
})
app.get("/skills",function(req,res){
	res.render("skills");
})
app.get("/about",function(req,res){
	res.render("about");
})
app.get("/projects",function(req,res){
	res.render("projects");
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});