const APIKey = "00906271ad12c5d4e8918a980c077502";
const city = "Kurgan";
const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

let xhr = new XMLHttpRequest();

xhr.open("GET", url, false);

xhr.send();

if (xhr.status != "200") {
    console.log(xhr.status + " " + xhr.statusText);
} else {
    var DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
    document.write(DATA.main.temp - 273 + " C");
}