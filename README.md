# mapTU
> A Leaflet.js based maps-clone that implements shortest route finding on a map of the college campus and renders requisite polylines

### Front End
* Leaflet.js Rendering a map of the college campus using Leaflet.js' support for creating OpenStreetMap tiles by simply passing the coordinates required

* Data: 73 nodes manually added into a Javascript locations array, each node structured like so: 
```
var locations = [
{ "name" : "Entrance Intersection", "x" :  30.351946, "y" : 76.372913,
"children" : ["Car Parking", "Audi-Cafeteria Intersection"]},
...
]
```
where the ```children``` refers to nodes which can be joined from the source node using a straight line path. ```x``` and ```y``` refers to the latitude and longitude of the place.
#### No preprocessing of data is being done here. Nodes are manually added.
