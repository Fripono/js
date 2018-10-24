const button = document.getElementById("temp");
const div_temp = document.getElementById("itog_temp");
const div_wind = document.getElementById("itog_wind");
button.onclick = () => {
    const APIKey = "00906271ad12c5d4e8918a980c077502";
    const city = document.getElementById("city").value;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status != "200") {
        console.log(xhr.status + " " + xhr.statusText);
    } else {
        var DATA = JSON.parse(xhr.responseText);
        div_temp.innerHTML = "Температура на данный момент: " + Math.round(DATA.main.temp - 273) + " &#176C";
        div_wind.innerHTML = "Скорость ветра: " + Math.round(DATA.wind.speed) + " м/с";
    }
}