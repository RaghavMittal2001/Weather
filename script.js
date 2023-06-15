let k = true;
const f = async (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2102f6ede3msh61fece14b66fde9p1c1cb4jsne2c10db8789e",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      if (k == true) {
        document.getElementById("cloud_pct_" + city).innerHTML =
          response.cloud_pct;
        document.getElementById("feels_like_" + city).innerHTML =
          response.feels_like;
        document.getElementById("humidity_" + city).innerHTML =
          response.humidity;
        document.getElementById("max_temp_" + city).innerHTML =
          response.max_temp;
        document.getElementById("min_temp_" + city).innerHTML =
          response.min_temp;
        document.getElementById("sunrise_" + city).innerHTML = response.sunrise;
        document.getElementById("sunset_" + city).innerHTML = response.sunset;
        document.getElementById("temp_" + city).innerHTML = response.temp;
        document.getElementById("wind_degrees_" + city).innerHTML =
          response.wind_degrees;
        document.getElementById("wind_speed_" + city).innerHTML =
          response.wind_speed;
      } else {
        document.getElementById("city").innerHTML = city;
        document.getElementById("temp").innerHTML = response.temp;
        document.getElementById("max_temp").innerHTML = response.max_temp;
        document.getElementById("min_temp").innerHTML = response.min_temp;
        document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
        document.getElementById("humidity").innerHTML = response.humidity;
        document.getElementById("feels_like").innerHTML = response.feels_like;
        document.getElementById("wind_degrees").innerHTML =
          response.wind_degrees;
        document.getElementById("wind_speed").innerHTML = response.wind_speed;
        document.getElementById("sunrise").innerHTML = response.sunrise;
        document.getElementById("sunset").innerHTML = response.sunset;
      }
    })

    .catch((err) => console.log(err));
};

const g = async () => {
  await f("Delhi");
  await f("Bangalore");
  await f("Chennai");
  await f("Tokyo");
  await f("Toronto");
  await f("Moscow");
};

let d = g();
d.then(() => {
  k = false;
  f("Delhi");
});

let cities = document.getElementById("cities");
console.log(cities);
let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(cities.value);
  f(cities.value);
});

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2102f6ede3msh61fece14b66fde9p1c1cb4jsne2c10db8789e',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// 	.catch(err => console.error(err));
