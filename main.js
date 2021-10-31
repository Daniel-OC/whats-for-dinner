//buttons
var sideButton = document.querySelector("#side-button")
var entreeButton = document.querySelector('#entree-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector(".lets-cook-button")
var viewFavsButton = document.querySelector(".view-favorites-button")
var favButton = document.querySelector(".fav-button")

//views
var homeView = document.querySelector('.home-view')
var favView = document.querySelector('.fav-view')

//other
var cookingSuggestion = document.querySelector(".you-should-make")
var potImage = document.querySelector('.cook-pot-image')
var insertRecipe = document.querySelector('.insert-recipe')
var introFavs = document.querySelector('.here-are-favs')
var listOfFavs = document.querySelector('.list-favs')




var recipe; //serves as data model on home view


//event listeners
letsCookButton.addEventListener('click', chooseCourse)
favButton.addEventListener('click', addFav)
viewFavsButton.addEventListener('click', toggleFavView)
favView.addEventListener('dblclick', deleteFav)

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

function showPot() {
  removeHidden(potImage);
  addHidden(cookingSuggestion);
  addHidden(insertRecipe);
  addHidden(favButton)
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
  console.log(favs)
}

function toggleFavView() {
  addHidden(homeView);
  removeHidden(favView);
  generateFavView();
}

function generateFavView() {
  listOfFavs.innerHTML= '';
  for(i = 0; i < favs.length; i++) {
    listOfFavs.innerHTML += `
    <input type ="radio" id="side-button">
    <label for="side">${favs[i]}</label><br>`
  }
}

function deleteFav() {
  for (i=0; i < favs.length; i++) {
    if (event.target.id === `${i}`) {
      favs.splice(i, 1)
    }
  }
  generateFavView();
}



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
