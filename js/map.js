
var map = L.map('map').setView([26.6648,87.2718], 14);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.control.scale().addTo(map); 
var marker = L.userMarker([26.6648,87.2718],{pulsing:true});
marker.setAccuracy(50);
marker.addTo(map);