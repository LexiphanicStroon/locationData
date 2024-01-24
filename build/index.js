const mapLink = document.querySelector('#mapLink');

document.getElementById('getLocation').addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition((position) => {
    document.cookie = `lat=${position.coords.latitude}; SameSite=Lax; path=/`;
    document.cookie = `lon=${position.coords.longitude}; SameSite=Lax; path=/`;
    mapLink.classList.remove('hidden');
  });
});

// navigator.geolocation.getCurrentPosition((position) => {
//   document.cookie = `lat=${position.coords.latitude}; path=/`;
//   document.cookie = `lon=${position.coords.longitude}; path=/`;
// });
