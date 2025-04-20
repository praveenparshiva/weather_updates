const kEY="7489ed7678b92fa9221633d00669e3a5";
const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const img=document.querySelector(".weather-icon");

async function search(city) {
    const response= await fetch(URL + city +`&appid=${kEY}`);

    if(response.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        
    var data = await response.json();

    document.querySelector(".temp").innerHTML=Math.round( data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if (data.weather[0].main === "Clouds") {
        img.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        img.src = "images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
        img.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Humidity") {
        img.src = "images/humidity.png";
    } else if (data.weather[0].main === "Mist") {
        img.src = "images/mist.png";
    } else if (data.weather[0].main === "Rain") {
        img.src = "images/rain.png";
    } else if (data.weather[0].main === "Snow") {
        img.src = "images/snow.png";
    } else if (data.weather[0].main === "Wind") {
        img.src = "images/wind.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    
    }

}
searchBtn.addEventListener("click", ()=>{
    search(searchBox.value);
});

searchBox.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        search(searchBox.value);
        document.querySelector(".card").style.marginTop="20px";
    }
});
