const addCard = () => {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = "My Card Title";
  template.querySelector(".card-description").innerText = "lorem ipsum ble bla";
  document.querySelector("#card-list").appendChild(template);
};

const fetchAirbnbDataByLocation = async(location, checkIn, checkOut, adults) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      "content-type": "application/octet-stream"
    },
  };

  let response = await fetch(
    `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}`,
    options
  );
  
  if (response.status === 200) {
    response = await response.json();
    //Adding data back to HTML

  }

};
fetchAirbnbDataByLocation('Sydney', '2023-04-29', '2023-05-05', 1);
if ("content" in document.createElement("template")) {
  addCard();
}
