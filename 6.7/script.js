class Person {
    constructor(name) {
        this.name = name;
        this.happiness = 0;
    }
    hasCat() {
        return this.happiness++;
    }
    hasRest() {
        return this.happiness++;
    }
    hasMoney() {
        return this.happiness++;
    }
    isSunny() {
        const APIKey = "00906271ad12c5d4e8918a980c077502";
        const city = "Moscow";
        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        if (xhr.status != "200") {
            console.log(xhr.status + " " + xhr.statusText);
        } else {
            var DATA = JSON.parse(xhr.responseText);
            if (Math.round(DATA.main.temp - 273) > 15) {
                return this.happiness++;
            } else {
                return this.happiness;
            }
        }
    }
}

window.addEventListener("load", function () {
    const form = document.querySelector("form");

    form.onsubmit = function (e) {
        e.preventDefault();
        const name = document.getElementsByName("name");
        const cat = document.getElementsByName("cat");
        const rest = document.getElementsByName("rest");
        const money = document.getElementsByName("money");
        const dude = new Person(name[0]);


        if (cat[0].checked) {
            dude.hasCat();
        }
        if (rest[0].checked) {
            dude.hasRest();
        }
        if (money[0].checked) {
            dude.hasMoney();
        }
        dude.isSunny();
        document.getElementsByClassName("personName")[0].innerHTML=name[0].value+": ";
        if (dude.happiness<2){
            document.getElementsByClassName("icon")[0].innerHTML="&#128546";
        }else if (dude.happiness>3){
            document.getElementsByClassName("icon")[0].innerHTML="&#128513";
        }else{
            document.getElementsByClassName("icon")[0].innerHTML="&#128528";
        }
    }
});