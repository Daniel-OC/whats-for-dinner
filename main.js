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



function toggleLetsCook () {

}


function toggleHidden() {
  if (potImage.classList.contains("hidden")) {
    potImage.classList.remove("hidden");
    cookingSuggestion.classList.add("hidden");
    insertRecipe.classList.add("hidden");
  } else {
  potImage.classList.add("hidden");
  cookingSuggestion.classList.remove("hidden");
  insertRecipe.classList.remove("hidden");
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
