
$(document).ready(function (){
        
    // obtener coordenadas

    var nombreCiudad;

    function getCoordinates() {
        var options = {
            enableHighAccuracy: true,
            maximumAge: 0
        };
    
        function success(pos) {
            var crd = pos.coords;
            var lat = crd.latitude.toString();
            var lng = crd.longitude.toString();
            var coordinates = [lat, lng];
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
            getCity(coordinates);
            return;
    
        }
    
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    
        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    // obtener nombre

    function getCity(coordinates) {
        var xhr = new XMLHttpRequest();
        var lat = coordinates[0];
        var lng = coordinates[1];
    
        // Paste your LocationIQ token below.
        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.113f14159744750b32fd904502d42cf4&lat=" +
        lat + "&lon=" + lng + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
    
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var nombreCiudad = response.address.city;
                console.log(nombreCiudad);
                return;
            }
        }
    }
    
    getCoordinates();

    // obtener datos del clima

    const api = {
        key: '1ef7a138b9dfb79bae57a1c3925879e3',
        url: `https://api.openweathermap.org/data/2.5/weather`
    }
    
    const card = document.getElementById('card')
    const city = document.getElementById('city');
    const tempImg = document.getElementById('temp-img');
    const temp = document.getElementById('temp');
    const weather = document.getElementById('weather');
    const range = document.getElementById('range');



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


    async function search(lat,lng) {
        
        try{
        
        const response = await fetch(`${api.url}?lat=${lat}&lon=${lng}&appid=${api.key}`);
        const data = await response.json();
        card.style.display = 'block';
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        temp.innerHTML = `${toCelsius(data.main.temp)}c`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
        updateImages(data);
         }catch (err) {
        console.log(err);
        alert('No tenemos acceso a tu ubicación');
    
    
        
        }
    }

    function toCelsius(kelvin) {
        return Math.round(kelvin - 273.15);
    }

    search();

})
