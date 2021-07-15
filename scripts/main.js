
const keyApi ='65f99e24f4029df05d6045bfb0d52cf9'
let resultatsApi;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    }, ()=> {
        alert('Vous avez refusé la geolocalisation')
    })
}
