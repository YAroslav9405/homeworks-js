
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.922197407884426,  lng: 24.71014474745484},
    zoom: 14,
    
  });
  

  const locations = [
    {
        position: new google.maps.LatLng(48.914800703310895, 24.69372011667896),
        name: 'Міське озеро',
        info: 'Це Івано Франківське міське озеро',
        img: '<img src="https://upload.wikimedia.org/wikipedia/commons/b/be/%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B5_%D0%BE%D0%B7%D0%B5%D1%80%D0%BE%2C_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA._%D0%92%D0%B8%D0%B3%D0%BB%D1%8F%D0%B4_%D0%B7_%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0_%D0%97%D0%B0%D0%BA%D0%BE%D1%85%D0%B0%D0%BD%D0%B8%D1%85.jpg" alt="img-desription" width=150px>',
    },
    {
        position: new google.maps.LatLng(48.91100488760789, 24.695162662456227),
        name: 'Міський парк',
        info: 'Міський парк ім. Тараса Шевченка',
        img: '<img src="https://recreation.if.ua/wp-content/uploads/2017/11/maxresdefault.jpg" alt="img-desription" width=150px>',
    },
    {
        position: new google.maps.LatLng(48.92247585462515, 24.71021736573981),
        name: 'Міська ратуша',
        info: 'Це Івано Франківське міська ратуша',
        img: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ivano-FrankivskRatusha.jpg/2560px-Ivano-FrankivskRatusha.jpg" alt="img-desription" width=150px>`,
    },
    {
        position: new google.maps.LatLng(48.958349112065235, 24.75367353256827),
        name: 'Вовчинецькі гори',
        info: 'Звідси відкривається панорама на все місто',
        img: `<img src="https://kurs.if.ua/media/gallery/full/2/6/26168691_159700594652873_4705007051691701306_n.jpg" alt="img-desription" width=150px>`,
    }
];

const infoWindow = new google.maps.InfoWindow();

for (let i = 0; i<locations.length; i++) {
   
    const marker = new google.maps.Marker({
        position: locations[i].position,
        map: map,
    });
    google.maps.event.addListener(map, 'zoom_changed', function(){
        map.setCenter( marker.getPosition() );
    });

    const content = `<div class="img-holder">${locations[i].img}</div> 
     <div class="text-holder first">
        <p>${locations[i].name}</p>
     </div>
     <div class="text-holder">
        <p>info: ${locations[i].info}</p>
     </div>
    `;
    marker.addListener('click' , () => {
        infoWindow.setContent(content);
        infoWindow.open({
            anchor: marker,
            map,

        })
    })
}


}

window.initMap = initMap;

