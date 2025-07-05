const APIKEY = "d54b108e96c80d6717d844eba8dad9a6";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = 'Navsari') {
  try {
    const res = await fetch(`${URL}${city}&appid=${APIKEY}`);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  } catch (error) {
    document.querySelector(".city").innerHTML = "Error: " + error.message;
    document.querySelector(".temp").innerHTML = "--";
    document.querySelector(".humidity").innerHTML = "--";
    document.querySelector(".wind").innerHTML = "--";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

checkWeather(); 
