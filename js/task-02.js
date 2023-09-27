const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// console.log(ingredients);
const list = document.querySelector("#ingredients");
const potatoes = document.createElement("li");
potatoes.textContent = "Potatoes";

const mushrooms = document.createElement("li");
mushrooms.textContent = "Mushrooms";
const garlic = document.createElement("li");
garlic.textContent = "Garlic";
const tomatos = document.createElement("li");
tomatos.textContent = "Tomatos";
const herbs = document.createElement("li");
herbs.textContent = "Herbs";
const condiments = document.createElement("li");
condiments.textContent = "Condiments";

// console.log(potatoes);
// console.log(mushrooms);
// console.log(garlic);
// console.log(tomatos);
// console.log(herbs);
// console.log(condiments);

const markup = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
// console.log(markup);
list.innerHTML = markup;
console.log(list);
