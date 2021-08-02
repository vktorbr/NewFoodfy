const fs = require("fs")

const data = require("../data.json");

exports.show = function(req, res){
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id;
    })

    if(!foundRecipe) return res.send("Recipe not found!");

    return res.render("admin/show", { recipe: foundRecipe })
}

exports.create = function(req, res){
    return res.render("admin/create");
}

exports.post = function(req, res){
    const keys = Object.keys(req.body);

    for(const key of keys){
        if(req.body[key] == ""){
            return res.send("Please, fill all fields!");
        }
    }
    let id = 1;
    const lastRecipe = data.recipes[data.recipes.length - 1];

    if(lastRecipe) id = lastRecipe.id + 1;

    data.recipes.push({
        ...req.body,
        id
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error!");
        
        return res.redirect(`/admin/recipes/${id}`);
    })
}

exports.edit = function(req, res){
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id;
    })

    if(!foundRecipe) return res.send("Recipe not Found!");

    return res.render("admin/edit", {recipe: foundRecipe})
}

exports.put = function(req, res){
    const { id } = req.body;

    let index = 0;
    console.log(req.body);
    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if(id == recipe.id){
            index = foundIndex;
            return true;
        }
    })

    if(!foundRecipe) return res.send("Recipe not Found");

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(id)
    }

    data.recipes[index] = recipe;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error!");

        return res.redirect(`/admin/recipes/${id}`);
    })
}