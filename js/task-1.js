const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

const titleCategory = document.querySelectorAll("h2");

titleCategory.forEach(title => {
   console.log(`Category: ${title.textContent}`);
   console.log(`Elements: ${title
      .parentNode
      .querySelectorAll("ul > li")
      .length}`);
});