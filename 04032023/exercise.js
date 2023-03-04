//Exercise 3: Get all the movie that has the budget > 175.000.000 - need to inogre the tbd movie (Easy)

//Loading JSON file
const movieJSON = require("./movie.json");



/*
  Hint 1: Get all keys of the marvelMovie - object 
  (movie name) and store them in the array - Object.keys()
*/
const marvelMovie = movieJSON["Marvel Cinematic Universe"];
const movieNameArr = Object.keys(marvelMovie);

//Exercise 1: Get the total budget of all movies need to inogre the tbd movie (Easy)
const totalBudgetExercise1 = calculateTotalBudget(marvelMovie, movieNameArr);

//Exercise 2: Get the list of action movie (category_name) (Middle)
const listActionMovie = getListOfActionMovie(marvelMovie, movieNameArr);

console.log(listActionMovie);

/**
 * Method to calculate the total budget
 * 2 params : the JSON movie object and the array of all movie name
 */
function calculateTotalBudget(movieJSON, movieNameArr) {
  let totalBudget = 0;
  for (let i = 0; i < movieNameArr.length; i++) {
    //Get value of each movie
    const movieName = movieNameArr[i];
    const movie = movieJSON[movieName];

    const budget = movie.budget;
    if (budget.toLowerCase() !== "tbd") {
      totalBudget = totalBudget + convertCurrencyToNumber(budget);
    }
  }
  return totalBudget;
}


function getListOfActionMovie(movieJSON, movieNameArr) {
  const listActionMovie = [];
  for(let i = 0; i<movieNameArr.length; i++) {
    //Get value of each movie
    const movieName = movieNameArr[i];
    const movie = movieJSON[movieName];

    const category = movie.category_name; 
    if (category && category.toLowerCase() === 'action') {
      //Push them into a list
      listActionMovie.push(movie);
    }
  }
  return listActionMovie;
}

function convertCurrencyToNumber(item) {
  const convertItem = item.replaceAll(",", ""); //"200,000,000" -> "20000000"
  return parseInt(convertItem); //"20000000" => 200000000
}
