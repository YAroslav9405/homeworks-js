
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.98076, lng: 24.69272},
    zoom: 11,
  });
}

window.initMap = initMap;

const locations = [
    {
        position: new google.maps.LatLng(48.914800703310895, 24.69372011667896),
        name: 'Міське озеро',
        info: 'Це Івано Франківське міське озеро',
        img: '<img src="https://upload.wikimedia.org/wikipedia/commons/b/be/%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B5_%D0%BE%D0%B7%D0%B5%D1%80%D0%BE%2C_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA._%D0%92%D0%B8%D0%B3%D0%BB%D1%8F%D0%B4_%D0%B7_%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0_%D0%97%D0%B0%D0%BA%D0%BE%D1%85%D0%B0%D0%BD%D0%B8%D1%85.jpg" alt="img-desription">',
    },
    {
        position: new google.maps.LatLng(48.91100488760789, 24.695162662456227),
        name: 'Міський парк',
        info: 'Міський парк ім. Тараса Шевченка',
        img: '<img src="https://recreation.if.ua/wp-content/uploads/2017/11/maxresdefault.jpg" alt="img-desription">',
    },
    {
        position: new google.maps.LatLng(48.92247585462515, 24.71021736573981),
        name: 'Міське ратушв',
        info: 'Це Івано Франківське міська ратуша',
        img: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ivano-FrankivskRatusha.jpg/2560px-Ivano-FrankivskRatusha.jpg" alt="img-desription">`,
    }
];

const infoWindow = new google.maps.InfoWindow();

for (let i = 0; i<locations.length; i++) {
    
    const marker = new google.maps.Marker({
        position: locations[i].position,
        map: map,
    });

    const content = `<div class="img-holder">${locations[i].img}</div> 
     <p>${locations[i].name}</p>
     <p>${locations[i].info}</p>
    `;
    marker.addListener('click' , () => {
        infoWindow.setContent(content);
        infoWindow.open({
            anchor: marker,
            map,

        })
    })
}

