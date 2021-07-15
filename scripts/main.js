
const keyApi ='65f99e24f4029df05d6045bfb0d52cf9'
let resultatsApi;
const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        //console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        appelApi(long,lat)
    }, ()=> {
        alert('Vous avez refusé la geolocalisation')
    })
}

function appelApi(long,lat){
    //console.log(long,lat);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${keyApi}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        //console.log(data);
        resultatsApi = (data); 
        temps.innerText = resultatsApi.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultatsApi.current.temp)}°`
        localisation.innerText = resultatsApi.timezone;
    })
}