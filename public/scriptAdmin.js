function addElement(arg1, arg2){
    const elements = document.querySelector("#" + arg1);
    const fieldContainer = document.querySelectorAll("." + arg2);

    //realiza um clone do ultimo elemento adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    //nao adiciona um novo input s eo ultimo estiver vazio
    if(newField.children[0].value == "") return false;

    //deixa o valor do input vazio
    newField.children[0].value = "";

    elements.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", function(){addElement("ingredients", "ingredient")});

document.querySelector(".add-step").addEventListener("click", function(){addElement("steps", "step")});