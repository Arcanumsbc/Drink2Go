const position=[59.968266,30.3174089],map=L.map("map").setView(position,17);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);const mainPinIcon=L.icon({iconUrl:"./img/map-pin.svg",iconSize:[39,50],iconAnchor:[18,50]}),mainPin=L.marker({lat:position[0],lng:position[1]},{draggable:!1,icon:mainPinIcon});mainPin.addTo(map);