let form = document.querySelector('form');
let input = document.querySelector('input');
let temperature = document.querySelector('#temp');
let locationName = document.querySelector('#location');
let timeTemp = document.querySelector('#time');
let conditionTemp = document.querySelector('#condition');
let imgTemp = document.querySelector('img')



form.addEventListener('submit', function(e) {
    e.preventDefault();
    const val = input.value;
    getWeather(val);
});

async function getWeather(place) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3b977c0058a34e56850163219241106&q=${place}`)
        const data = await response.json();
        console.log(data);
        let currentTemp = data.current.temp_c;
        let locationVal = data.location.name;
        let condition = data.current.condition.text;
        let img = data.current.condition.icon;
        let time = data.location.localtime;
        updateDOM(currentTemp, locationVal, condition, img, time);
    }
    catch(err) {
        alert("place not found")
        console.log(err);
    }
}

function updateDOM(currentTemp, locationEle, condition, img, time) {
    temperature.innerText = currentTemp;
    locationName.innerText = locationEle;
    conditionTemp.innerText = condition;
    imgTemp.src = "https:" + img
    timeTemp.innerText = time;
}