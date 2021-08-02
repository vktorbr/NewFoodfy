const articles = document.querySelectorAll(".articleRecipe");

for(const article of articles){
    const button = article.querySelector(".subHeader a");
    button.addEventListener("click", function(){
        article.querySelector(".recipeContent").classList.toggle("desactive");
        
        button.innerHTML = button.innerHTML == 'ESCONDER' ? 'MOSTRAR' : 'ESCONDER'; 
    });
}

const recipes = document.querySelectorAll(".recipe");

for(const recipe of recipes){
    recipe.addEventListener("click", function(){
        const id = recipe.getAttribute("id");
        window.location.href = `/recipes/${id}`;
    });
}