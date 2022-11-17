const APPID = "499f35f04cb2dd393f6760e808efaa5e";

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}