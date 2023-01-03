let latitude = 22.7868542, longitude = 88.3643296
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [longitude, latitude],
    zoom: 4,
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    }),
    'top-left'
)
//amber fort
var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.8513,26.9855])
.addTo(map);

//gateway of india
var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([72.8347,18.9220])
.addTo(map);

//India Gate
var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.2295,28.6129])
.addTo(map);

//Lotus Temple
var img4 = document.querySelector("#lotus")
var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.2588,28.5535])
.addTo(map);

//Victoria memorial
var img5 = document.querySelector("#victoria")
var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.3426,22.5548])
.addTo(map);