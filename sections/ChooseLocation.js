const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");

function updateCity(city) {
    // updatam orasul afisat 
    const currentCity = document.getElementById(""current-city);
    currentCity.innerHTML = city;
    //afisam noile date de la API
    displayCurrentWeather(city);
}

bucharest.addEventListener("click", function() {
    updateCity("Bucuresti");
});

timisoara.addEventListener("click", function() {
    updateCity("Timisoara");
});

oradea.addEventListener("click", function() {
    updateCity("Oradea");
});
