const recipes = require("../data.js");

//home
exports.home = function(req, res){
    return res.render("index", {recipes});
};

//index
exports.index = function(req, res){
    return res.render("recipes", {recipes});
};

//about
exports.about = function(req, res){
    return res.render("about");
};

//show
exports.show = function(req, res){
    const recipeIndex = req.params.index;

    return res.render("recipe", {recipe: recipes[recipeIndex]});
};