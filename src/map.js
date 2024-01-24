function initMap() {
  const lat = parseFloat(getCookie('lat'));
  const lon = parseFloat(getCookie('lon'));
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat, lng: lon },
  });
  new google.maps.Marker({ position: { lat, lng: lon }, map: map });
}

const imgContainer = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZyU7ccEg6LofqQ7GqxCtMNHTHz0e7Sxh&s=i+can+see+you&weirdness=10')
.then(function(response) {
  return response.json();
})
.then(function(response) {
  imgContainer.src = response.data.images.original.url;
});

// https://media2.giphy.com/media/y5tb0kxaGo5Nwnpkg1/giphy.gif?cid=a257c4d9rnr1l7swqm13yb7zfirsjia4pv1i2aeut4ulje31&ep=v1_gifs_translate&rid=giphy.gif&ct=g

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

gsap.from("#myGif", {
  opacity: 0,
  y: -100,
  duration: 2,
  ease: "power4.out",
  x: -200
});

gsap.from('#headerOne', {
  opacity: 0,
  y: -100,
  duration: 2,
  ease: "power4.out"
})

gsap.from("#map", {
  opacity: 0,
  duration: 10
})