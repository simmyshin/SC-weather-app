//date and time stamp live
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let fullDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = fullDays[now.getDay()];

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${date} ${month}, ${hours}:${minutes}`;

//

//search bar, amend city
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#exTemperature");
  let description = document.querySelector("#exTemperature-description");
  temperatureElement.innerHTML = `${temperature}ºC`;
  description.innerHTML = response.data.weather[0].description;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#main-city");
  let searchInput = document.querySelector("#search-text-input");
  cityElement.innerHTML = searchInput.value;

  let city = document.querySelector("#search-text-input");
  city.innerHTML = searchInput.value;
  let apiKey = "00b6e52d3f428bdf68789adef76506de";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

axios.get(`${apiUrl}`).then(showTemperature);

//

//

//weather API
//let city = "London";
//let apiKey = "00b6e52d3f428bdf68789adef76506de";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;

//function showTemperature(response) {
//  let temperature = Math.round(response.data.main.temp);
//  let temperatureElement = document.querySelector("#exTemperature");
//  let description = document.querySelector("#exTemperature-description");
//  temperatureElement.innerHTML = `${temperature}ºC`;
//  description.innerHTML = response.data.weather[0].description;
//}

//let h2 = document.querySelector("#exCity");
//h2.innerHTML = city;

//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

//farenheit amend
function showFarenheitTemp(event) {
  event.preventDefault();
  let tempValue = document.querySelector("#temperature-element");
  tempValue.innerHTML = 77;
}
function showCelsiusTemp(event) {
  event.preventDefault();
  let tempValue = document.querySelector("#temperature-element");
  tempValue.innerHTML = 17;
}

let farenheitButton = document.querySelector("#farenheit-button");
farenheitButton.addEventListener("click", showFarenheitTemp);

let celsiusButton = document.querySelector("#celsius-button");
celsiusButton.addEventListener("click", showCelsiusTemp);

//

//

//

//let shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//let dayPlus1 = shortDays[now.getDay()];
//let dayPlus2 = shortDays[now.getDay() + 1];
//let dayPlus3 = shortDays[now.getDay() + 2];
//let dayPlus4 = shortDays[now.getDay() + 3];
//let dayPlus5 = shortDays[now.getDay() + 4];
//let dayPlus6 = shortDays[now.getDay() + 5];

//let dayOne = document.querySelector("#day-1");
//dayOne.innerHTML = `${dayPlus1}`;

//let dayTwo = document.querySelector("#day-2");
//dayTwo.innerHTML = `${dayPlus2}`;

//let dayThr = document.querySelector("#day-3");
//dayThr.innerHTML = `${dayPlus3}`;

//let dayFou = document.querySelector("#day-4");
//dayFou.innerHTML = `${dayPlus4}`;

//let dayFiv = document.querySelector("#day-5");
//dayFiv.innerHTML = `${dayPlus5}`;

//let daySix = document.querySelector("#day-6");
//daySix.innerHTML = `${dayPlus6}`;
