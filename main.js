//buttons
var sideButton = document.querySelector("#side-button")
var entreeButton = document.querySelector('#entree-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector(".lets-cook-button")
var viewFavsButton = document.querySelector(".view-favorites-button")
var favButton = document.querySelector(".fav-button")
var homeButton = document.querySelector('.home-from-favs')
var deleteButton = document.querySelector('.delete-fav')

//views
var homeView = document.querySelector('.home-view')
var favView = document.querySelector('.fav-view')

//other
var cookingSuggestion = document.querySelector(".you-should-make")
var potImage = document.querySelector('.cook-pot-image')
var insertRecipe = document.querySelector('.insert-recipe')
var introFavs = document.querySelector('.here-are-favs')
var listOfFavs = document.querySelector('.list-favs')
var allFavButtons = listOfFavs.getElementsByTagName("input")

//data model
var recipe;


//event listeners
letsCookButton.addEventListener('click', chooseCourse)
favButton.addEventListener('click', addFav)
viewFavsButton.addEventListener('click', toggleFavView)
deleteButton.addEventListener('click', deleteFav)
homeButton.addEventListener('click', toggleHomeView)

function addHidden(element) {
  element.classList.add('hidden')
}

function removeHidden(element) {
  element.classList.remove('hidden')
}

function hidePot() {
  addHidden(potImage);
  removeHidden(cookingSuggestion);
  removeHidden(insertRecipe);
  removeHidden(favButton);
}

function chooseCourse() {
  if (entreeButton.checked || sideButton.checked || dessertButton.checked) {
    if (entreeButton.checked) {
      recipe = entrees[getRandomIndex(entrees)]
    }else if (sideButton.checked) {
      recipe = sides[getRandomIndex(sides)]
    }else if (dessertButton.checked) {
      recipe = desserts[getRandomIndex(desserts)]
    }
    insertRecipe.innerHTML = `<h3 class="insert-recipe">${recipe}</h3>`;
    hidePot();
  }
}

function addFav() {
  if (!favs.includes(recipe))
  favs.push(recipe)
}

function toggleFavView() {
  addHidden(homeView);
  removeHidden(favView);
  generateFavView();
}

function toggleHomeView() {
  addHidden(favView)
  removeHidden(homeView)
}

function generateFavView() {
  listOfFavs.innerHTML= '';
  for(i = 0; i < favs.length; i++) {
    listOfFavs.innerHTML += `
    <input type ="radio" name="same-as-others" id="${i}">
    <label for="side">${favs[i]}</label><br>`
  }
}

function deleteFav() {
  for (i=0; i < allFavButtons.length; i++) {
    if (allFavButtons[i].checked) {
      favs.splice(i,1)
    }
  }
  generateFavView();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
