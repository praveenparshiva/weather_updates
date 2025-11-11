const API_KEY = "7489ed7678b92fa9221633d00669e3a5";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const img = document.querySelector(".weather-icon");

async function search(city) {
  const response = await fetch(URL + city + `&appid=${API_KEY}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherMain = data.weather[0].main;
    const imageMap = {
      Clouds: "clouds.png",
      Clear: "clear.png",
      Drizzle: "drizzle.png",
      Humidity: "humidity.png",
      Mist: "mist.png",
      Rain: "rain.png",
      Snow: "snow.png",
      Wind: "wind.png",
    };

    img.src = `images/${imageMap[weatherMain] || "clear.png"}`;
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  search(searchBox.value);
});

searchBox.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    search(searchBox.value);
    document.querySelector(".card").style.marginTop = "20px";
  }
});
