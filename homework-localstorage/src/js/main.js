let container = document.querySelector('.container');



 function weather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.92&lon=24.70&units=metric&appid=3151cbfac2254f966e217eb93f15e6ab`).then(response => {
        return response.json();
    }).then(data => {
        
    let newWeather = [data];
    console.log(newWeather);
    
    const forecast = `
        <div class="weather">
            <div class="city-holder">
                <h1 class="title">${newWeather[0].name}</h1>
            </div>
            <div class="temp-holder">
                <img src='http://openweathermap.org/img/wn/${newWeather[0].weather[0].icon}.png'>
                <div class="text temp" >${newWeather[0].main.temp}&#8451;</div>
            </div>
            <div class="text" >${newWeather[0].weather[0].description}</div>
            <div class="text" >wind: ${newWeather[0].wind.speed} km/h</div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', forecast);
    
    });

    let interval = 30*60*1000; 

    setInterval(function () {
        newWeather = [];
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.92&lon=24.70&units=metric&appid=3151cbfac2254f966e217eb93f15e6ab`).then(response => {
        return response.json();
    }).then(newForecast => {
        newWeather = [newForecast];
        localStorage.setItem('forecast', newWeather[0].main.temp);
        console.log(localStorage)
        console.log(localStorage.getItem('forecast'))

        if(container.contains(document.querySelector('.weather'))) {
            container.removeChild(document.querySelector('.weather'));
            const forecast = `
            <div class="weather">
                <div class="city-holder">
                    <h1 class="title">${newWeather[0].name}</h1>
                </div>
                <div class="temp-holder">
                    <img src='http://openweathermap.org/img/wn/${newWeather[0].weather[0].icon}.png'>
                    <div class="text temp" >${newWeather[0].main.temp}&#8451;</div>
                </div>
                <div class="text" >${newWeather[0].weather[0].description}</div>
                <div class="text" >wind: ${newWeather[0].wind.speed} km/h</div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', forecast);
        }
        
    })}, interval );
    
    
};

weather();


