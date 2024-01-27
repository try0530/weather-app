const apiKey = "9046f567094c4850a3e45205241901";
const apiUrl = "http://api.weatherapi.com/v1/current.json?";

// to catch what city name user input
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}` + `&key=${apiKey}`);
    
    // response.status will give the status back i.g. 404, 400
    // if(response.status == 400) {
    // response.ok will give whether the response work ok back, so we don't have to guess which status will return back
    if(!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        // to switch the weather details on website
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.feelslike_c) + "&deg;C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/hr";

        // 我用的網站和他不一樣，要用那些詞才能換圖片?
        if(data.weather == "Clouds") {
            weatherIcon.src = "asset/images/clouds.png";
        }
        else if(data.weather == "Clear") {
            weatherIcon.src = "asset/images/clear.png";
        }
        else if (data.weather == "Rain") {
            weatherIcon.src = "asset/images/rain.png";
        }
        else if (data.weather == "Drizzle") {
            weatherIcon.src = "asset/images/drizzle.png";
        }
        else if (data.weather == "Mist") {
            weather.src = "asset/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
});

