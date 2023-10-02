const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const productList = document.getElementById("ingredients");

const listIngredients = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  listIngredients.push(listItem);
});
productList.append(...listIngredients);
