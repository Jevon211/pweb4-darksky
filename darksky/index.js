
const Http = new XMLHttpRequest();
const url='https://api.darksky.net/forecast/83f581dd35827e48af9e935b309a6459/37.8267,-122.4233';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
}

window.onload = function findLocation() {
    var geoSuccess = function() {
      document.getElementById('startLat').innerHTML = startPos.coords.latitude.toFixed(4);
      document.getElementById('startLon').innerHTML = startPos.coords.longitude.toFixed(4);
    };
    var geoError = function(error) {
        alert('Your position is not defined');
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };