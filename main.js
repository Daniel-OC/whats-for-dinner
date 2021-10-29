//buttons
var sideButton = document.querySelector("#side-button")
var entreeButton = document.querySelector('#entree-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector(".lets-cook-button")
var addRecipeButton = document.querySelector(".add-recipe-button")

//other
var cookingSuggestion = document.querySelector(".you-should-make")
var potImage = document.querySelector('.cook-pot-image')
var insertRecipe = document.querySelector('.insert-recipe')
var recipe;


function toggleLetsCook () {
}

letsCookButton.addEventListener('click', chooseCourse)

// function toggleHidden() {
//   if (potImage.classList.contains("hidden")) {
//     potImage.classList.remove("hidden");
//     cookingSuggestion.classList.add("hidden");
//     insertRecipe.classList.add("hidden");
//   } else {
//   potImage.classList.add("hidden");
//   cookingSuggestion.classList.remove("hidden");
//   insertRecipe.classList.remove("hidden");
//   }
// }

function chooseCourse() {
  if (entreeButton.checked) {
    recipe = entrees[getRandomIndex(entrees)]
  }else if (sideButton.checked) {
    recipe = sides[getRandomIndex(sides)]
  }else if (dessertButton.checked) {
    recipe = desserts[getRandomIndex(desserts)]
  }
  insertRecipe.innerHTML = `<h3 class="insert-recipe">${recipe}</h3>`;
  hidePot();
  console.log(recipe)


}

function hidePot() {
  addHidden(potImage);
  removeHidden(cookingSuggestion);
  removeHidden(insertRecipe);
}

function showPot() {
  removeHidden(potImage);
  addHidden(cookingSuggestion);
  addHidden(insertRecipe);
}

function addHidden(element) {
  element.classList.add('hidden')
}

function removeHidden(element) {
  element.classList.remove('hidden')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
