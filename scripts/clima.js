const api = {
    key: '1ef7a138b9dfb79bae57a1c3925879e3',
    url: `https://api.openweathermap.org/data/2.5/weather`
}
  
const card = document.getElementById('card')

const city = document.getElementById('city');
// city.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter')},removeCiudad);
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');


// const removeCiudad = event => {

//   $('.search').fadeOut(250);
  
// };
  
function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = './img/weather,png';
    if (temp > 26) {
      src = './img/sun.png';
    } else if (temp < 20) {
      src = './img/storm.png';
    }
    tempImg.src = src;
}
  
async function search(query) {
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
      const data = await response.json();
      card.style.display = 'block';
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      
      temp.innerHTML = `${toCelsius(data.main.temp)}c`;
      weather.innerHTML = data.weather[0].description;
      range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
      updateImages(data);
    } catch (err) {
      console.log(err);
      alert('No ingresaste una ciudad existente');
    }
}
  
function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}
  
function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}
  
const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');
searchform.addEventListener('submit', onSubmit, true);