const recipes = require("./controllers/recipes");
const admin = require("./controllers/admin");
const express = require("express");
const routes = express.Router();

//recipes
routes.get("/", recipes.home);
routes.get("/about", recipes.about);
routes.get("/recipes/:index", recipes.show);
routes.get("/recipes", recipes.index);

//admin
//routes.get("/admin/recipes", admin.index); //exibir lista de receitas
routes.get("/admin/recipes/create", admin.create); //exibir form de criacao de receita
routes.get("/admin/recipes/:id", admin.show); //exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); //exibir form de edicao de receita

routes.post("/admin/recipes", admin.post); //criar uma receita
routes.put("/admin/recipes", admin.put); //editar uma receita
//routes.delete("/admin/recipes", admin.delete); //deletar receita

module.exports = routes;