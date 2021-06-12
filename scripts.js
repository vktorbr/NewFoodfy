const modal = document.querySelector(".modalOverlay");

const recipes = document.querySelectorAll(".recipe");

const closeButton = modal.querySelector("a");

for (const recipe of recipes) {
    recipe.addEventListener("click", function(){
        modal.classList.toggle("active");
        modal.querySelector("img").src = recipe.querySelector("img").src;
        modal.querySelector("h3").textContent = recipe.querySelector("h3").textContent;
         modal.querySelector("#author").textContent = recipe.querySelector("p").textContent;
    })
}

closeButton.addEventListener("click", function(){
    modal.classList.toggle("active");
})