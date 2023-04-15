async function covidJSONData() {
  const response = await fetch("https://api.covid19api.com/summary"); //Endpoint PUT/GET/POST/DELETE
  const covidData = await response.json();

  console.log(covidData);
  
  // Q.1 Get the total cases (total Confirmed) in the world

  // Q.2 Get the total Death (total Deaths)  in the world

  // Q.3 Sort country by TotalConfirmed

}

console.log(covidJSONData());