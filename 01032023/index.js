let JSONObject = {
	"name" : "Jason",
	"age": "50",
	"height": "153cm",
	"city": "Berlin",
  "teddy": "student",
  "grade": {
    "first_year": "A",
    "second_year": "B",
    "third_year": "C"
  },
  "address": [
    "221 B Baker Street", "Trump Tower", "Tokyo"
  ]
};
//Print JSON 
console.log(JSONObject);

//Get number of Json
console.log(parseInt(JSONObject.age)  + 1 ); //Convert 50 string into 50 number => number + number , string + number = string


