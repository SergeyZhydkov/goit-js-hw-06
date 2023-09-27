const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const itemName = category.querySelector("h2");
  const itemElem = category.querySelectorAll("li");
  console.log(`Category: ${itemName.textContent}`);
  console.log(`Elements: ${itemElem.length}`);
});
