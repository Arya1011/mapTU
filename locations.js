//Please note not preprocessing of data is happening here..I manually added the nodes here in the format specified in the github Readme file
var locations = [
    { "name" : "Entrance Intersection", "x" :  30.351946, "y" : 76.372913, "children" : ["Car Parking", "Audi-Cafeteria Intersection"]},
    { "name" : "Car Parking", "x" : 30.352305, "y" : 76.372295, "children" : ["Directorate", "Audi-Cafeteria Intersection - 2", "Entrance Intersection"]},
    { "name" : "Auditorium", "x" : 30.352057, "y" : 76.370906, "children" : ["Car Parking", "Audi-Cafeteria Intersection - 2"]},
    { "name" : "Directorate", "x" : 30.352454, "y" : 76.371704, "children" : ["Audi-Cafeteria Intersection - 2"]},
    { "name" : "Sodexo", "x" : 30.352587, "y" : 76.371074,"children" : ["Cafeteria", "Audi-Cafeteria Intersection - 2"]},
    { "name" : "State Bank of India", "x" : 30.352541, "y" : 76.370309, "children" : ["B Block", "C Block", "Audi-SBOP Intersection"]},
    { "name" : "B Block", "x" : 30.352937, "y" : 76.370259, "children" : ["C Block", "State Bank of India"]},
    { "name" : "E Block", "x" : 30.354365, "y" : 76.37176, "children" : ["F Block", "Workshop"]},
    { "name" : "F Block", "x" : 30.354382, "y" : 76.372014, "children" : ["E Block", "Workshop"]},
    { "name" : "C Block", "x" : 30.353384, "y" : 76.37021, "children" : ["B Block", "Academic Block Intersection-3"] },
    { "name" : "SBOP Lawns", "x" : 30.352402, "y" : 76.370226, "children" : ["G Block", "Audi-SBOP Intersection"] },
    { "name" : "Guest House", "x" : 30.351818, "y" : 76.369623, "children" : ["Hostel Road-Guest House Intersection"]},
    { "name" : "Heritage Haveli", "x" : 30.351358, "y" : 76.367839, "children" : ["Hostel Road-Guest House Intersection", "PG Hostel"] },
    { "name" : "PG Hostel", "x" : 30.351224, "y" : 76.366674, "children" : ["Heritage Haveli", "PG-A Hostel Intersection"]},
    { "name" : "Nirvana", "x" : 30.353637, "y" : 76.365901, "children" : ["Tan Building", "H Chowk Down"]},
    { "name" : "G Block", "x" : 30.353628, "y" : 76.370062, "children" : ["SBOP Lawns", "Academic Block Intersection-4"] },
    { "name" : "Tan Building", "x" : 30.353927, "y" : 76.3685, "children" : ["Nirvana", "Academic Block Intersection-4"] },
    { "name" : "Cafeteria", "x" : 30.352656, "y" : 76.371073, "children" : ["Audi-Cafeteria Intersection - 2"] },
    { "name" : "A Hostel", "x" : 30.351039, "y" : 76.364935, "children" : ["B Hostel", "PG-A Hostel Intersection"] },
    { "name" : "B Hostel", "x" : 30.350875, "y" : 76.363498, "children" : ["A Hostel", "C Hostel"] },
    { "name" : "C Hostel", "x" : 30.350664, "y" : 76.361563, "children" : ["B Hostel", "D Hostel"]},
    { "name" : "D Hostel", "x" : 30.350475, "y" : 76.360172, "children" : ["C Hostel"]},
    { "name" : "H Hostel", "x" : 30.352954, "y" : 76.365205, "children" : ["H Chowk Down", "Gurudwara Intersection", "PG-A Hostel Intersection"]},
    { "name" : "J Hostel", "x" :  30.353435, "y" : 76.363376, "children" : ["H Chowk Down", "Iconic-Track Intersection Down"]},
    { "name" : "M Hostel", "x" :  30.353046, "y" : 76.360211, "children" : ["Iconic-Track Intersection Down"]},
    { "name" : "FRC Buildings", "x" :  30.353685, "y" : 76.360581, "children" : ["Iconic-Track Intersection Up", "Synthetic Track"]},
    { "name" : "Synthetic Track", "x" :  30.353597, "y" : 76.360618, "children" : ["FRC Buildings", "Iconic-Track Intersection Up"]},
    { "name" : "COS Entrance", "x" : 30.353464, "y" : 76.362801, "children" : ["COS", "H Chowk Up", "Iconic-Track Intersection Up"]},
    { "name" : "OAT", "x" :  30.353791, "y" : 76.362984, "children" : ["COS"]},
    { "name" : "COS", "x" :  30.353759, "y" : 76.362791, "children" : ["OAT", "COS Entrance", "Jujus Cafe", "Hot Express", "Wrapchik"]},
    { "name" : "K Hostel", "x" :  30.356384, "y" : 76.36358, "children" : ["K Hostel Entrance"]},
    { "name" : "Dispensary", "x" :  30.353672, "y" : 76.365451, "children" : ["E Hostel", "H Chowk Up"]},
    { "name" : "Girls Hostel Gate", "x" : 30.353902, "y" : 76.367453, "children" : ["E Hostel", "N Hostel", "Girls Hostel Intersection", "Academic Block Intersection-1"]},
    { "name" : "E Hostel", "x" :  30.353856, "y" : 76.367179, "children" : ["Girls Hostel Gate", "Dispensary", "Academic Block Intersection-1"]},
    { "name" : "Girls Hostel Intersection", "x" :  30.354703, "y" : 76.367297, "children" : ["G Hostel", "I Hostel", "N Hostel", "Girls Hostel Gate"]},
    { "name" : "G Hostel", "x" : 30.354666, "y" :76.36705, "children" : ["Girls Hostel Intersection"]},
    { "name" : "I Hostel", "x" :  30.355347, "y" : 76.367195, "children" : ["Girls Hostel Intersection"]},
    { "name" : "N Hostel", "x" : 30.354279, "y" : 76.367382, "children" : ["Girls Hostel Intersection", "Girls Hostel Gate"]},
    { "name" : "Workshop", "x" :  30.354338, "y" : 76.371337, "children" : ["Academic Block Intersection-2", "E Block", "F Block", "Workshop-Library Intersection"]},
    { "name" : "Library", "x" :  30.356129, "y" : 76.372179, "children" : ["Library Road Bend 3"]},
    { "name" : "Polytechnic", "x" :  30.357235, "y" : 76.367528, "children" : ["Residential Area Intersection-2"]},
    { "name" : "Library Backside Road Bend", "x" : 30.356035, "y" : 76.371164, "children": ["Workshop-Library Intersection", "Residential Area Intersection-4"]},
    { "name" : "Gurudwara Intersection", "x" : 30.352349, "y" : 76.365293, "children": ["Gurudwara", "H Hostel", "PG-A Hostel Intersection"]},
    { "name" : "Gurudwara", "x" :  30.352023, "y" : 76.362587, "children": ["Gurudwara Intersection"]},
    { "name" : "Jujus Cafe", "x" :  30.353902, "y" : 76.362614, "children": ["Wrapchik", "Hot Express", "COS"]},
    { "name" : "Hot Express", "x" :  30.354055, "y" : 76.362303, "children": ["Wrapchik", "Jujus Cafe", "COS"]},
    { "name" : "Wrapchik", "x" :  30.354245, "y" : 76.36204, "children": ["Hot Express", "Jujus Cafe", "COS"]},
    { "name" : "Iconic-Track Intersection Up", "x" :  30.353201, "y" : 76.360681, "children": ["H Chowk Up", "FRC Buildings", "Synthetic Track", "COS Entrance", "Iconic-Track Intersection Down"]},
    { "name" : "Iconic-Track Intersection Down", "x" : 30.353108, "y" : 76.360702, "children": ["H Chowk Down", "J Hostel", "M Hostel", "Iconic-Track Intersection Up"]},
    { "name" : "H Chowk Up", "x" : 30.353648, "y" : 76.365103, "children": ["Dispensary", "COS Entrance", "Iconic-Track Intersection Up", "E Hostel", "Girls Hostel Gate", "Academic Block Intersection-1", "Sports Complex Intersection", "H Chowk Down"]},
    { "name" : "H Chowk Down", "x" : 30.353555, "y" : 76.36512, "children": ["M Hostel", "Iconic-Track Intersection Down", "J Hostel", "H Hostel", "Gurudwara Intersection", "PG-A Hostel Intersection", "Academic Block Intersection-4", "H Chowk Up", "Nirvana", "Tan Building"]},
    { "name" : "PG-A Hostel Intersection", "x" :  30.351093, "y" : 76.365466, "children": ["PG Hostel", "A Hostel", "Gurudwara Intersection"]},
    { "name" : "Sports Complex Intersection", "x" :  30.355335, "y" : 76.364843, "children": ["K Hostel Entrance", "H Chowk Up", "Residential Area Intersection-1"]},
    { "name" : "Residential Area Intersection-1", "x" :  30.355531, "y" : 76.366196, "children": ["Sports Complex Intersection", "Residential Area Intersection-2"]},
    { "name" : "Residential Area Intersection-2", "x" :  30.355487, "y" : 76.367738, "children": ["Residential Area Intersecion-1", "Residential Area Bend 1", "Polytechnic"]},
    { "name": "Residential Area Bend 1", "x" : 30.355583, "y" : 76.36867, "children": ["Residential Area Intersecion-1", "Residential Area Intersection-2", "Residential Area Intersection-3"]},
    { "name" : "Residential Area Intersection-3", "x" :  30.35594, "y" : 76.369615, "children": ["Residential Area Bend 1", "Residential Area Bend 2", "Residential Area Intersection-4"]},
    { "name": "Residential Area Bend 2", "x" : 30.355267, "y" : 76.369825, "children": ["Residential Area Intersection-3", "Academic Block Intersection-1"]},
    { "name" : "Residential Area Intersection-4", "x" :  30.356588, "y" : 76.370292, "children": ["Residential Area Intersection-3", "Library Backside Road Bend"]},
    { "name" : "Academic Block Intersection-1", "x" :  30.354169, "y" : 76.369979, "children": ["H Chowk Up", "Dispensary", "E Hostel", "Girls Hostel Gate", "Residential Area Bend 2", "Academic Block Intersection-2", "Academic Block Intersection-4"]},
    { "name" : "Academic Block Intersection-2", "x" :  30.354171, "y" : 76.37013, "children": ["Workshop", "E Block", "F Block", "Academic Block Intersection-1", "Academic Area Intersection-3"]},
    { "name" : "Academic Block Intersection-3", "x" :  30.35405, "y" :  76.370136, "children": ["C Block", "Academic Block Intersection-2", "Academic Block Intersection-4"]},
    { "name" : "Academic Block Intersection-4", "x" :  30.35407, "y" : 76.370015, "children": ["H Chowk Down", "Nirvana", "Tan Building", "G Block", "Academic Block Intersection-1", "Academic Block Intersection-3"]},
    { "name" : "Workshop-Library Intersection", "x" :  30.355462, "y" : 76.371226, "children": ["Library Road Bend 1", "Library Backside Road Bend", "Workshop"]},
    { "name" : "Audi-SBOP Intersection", "x" :  30.351647, "y" : 76.370452, "children": ["SBOP Lawns", "State Bank of India", "Hostel Road-Guest House Intersection", "Audi-Cafeteria Intersection"]},
    { "name" : "Audi-Cafeteria Intersection", "x" :  30.351753, "y" : 76.371243, "children": ["Audi-SBOP Intersection", "Entrance Intersection", "Audi-Cafeteria Intersection - 2"]},
    { "name" : "Audi-Cafeteria Intersection - 2", "x" :  30.352104, "y" : 76.37117, "children": ["Auditorium", "Audi-Cafeteria Intersection", "Car Parking", "Cafeteria", "Sodexo"]},
    { "name" : "Hostel Road-Guest House Intersection", "x" : 30.351565, "y": 76.369684, "children": ["Audi-SBOP Intersection", "Guest House", "Heritage Haveli"]},
    { "name" : "Library Road Bend 1", "x" : 30.355523, "y" : 76.371632, "children": ["Workshop-Library Intersection", "Library Road Bend 2"]},
    { "name": "Library Road Bend 2", "x" : 30.355925, "y" : 76.371868, "children": ["Library Road Bend 1", "Library Road Bend 3"]},
    { "name": "Library Road Bend 3", "x" : 30.356041, "y" : 76.37202, "children": ["Library", "Library Road Bend 2"]},
    { "name": "K Hostel Entrance", "x" : 30.356425, "y" : 76.364701, "children": ["Sports Complex Intersection", "K Hostel"]}
  ]

//   for(var i=0;i<locations.length;i++){
//     //   var marker=L.marker([locations[i].x,locations[i].y]).addTo(mymap);
//     //   marker.bindPopup(locations[i].name);
//          console.log(locations[i].index);
// }

//Show all markers
// for(var i=0;i<locations.length;i++){
//       var marker=L.marker([locations[i].x,locations[i].y]).addTo(mymap);
//       marker.bindPopup(locations[i].name);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

     



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//4)Finding the distances
// Haversine formula for finding the shortest distance ebtween two coordinates
// formula:	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
// c = 2 ⋅ atan2( √a, √(1−a) )
// d = R ⋅ c

function degtoRad(value){
   return value*Math.PI/180;
}

//Calculating Havestine Distance
function calcCrowDist(lat1,long1,lat2,long2){
        var R=6371000;  //distance in km
        var dlat=degtoRad(lat2-lat1);
        var dlong=degtoRad(long2-long1);
        lat1=degtoRad(lat1);
        lat2=degtoRad(lat2);
        var a=Math.sin(dlat/2)*Math.sin(dlat/2)+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dlong/2)*Math.sin(dlong/2);
        var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
        return R*c;  //distance in metres
}

//console.log(calcCrowDist(30.355267,76.369825,30.355583,76.36867));
var distMat=[];

//fill the distance matrix
for(var i=0;i<locations.length;i++){
    //this matrix will contain the distance of each node from anothe node on the map
    locations[i].index=i;
    var distanceMatrixForEachPlace=[];
    for(var j=0;j<locations.length;j++)
    {
        //Check if a node is connected to another node by a straight line
        if(locations[i].children.indexOf(locations[j].name)<=-1){
            distanceMatrixForEachPlace[j]=Number.MAX_VALUE;
        }
        else{
            distanceMatrixForEachPlace[j]=calcCrowDist(locations[i].x,locations[i].y,locations[j].x,locations[j].y);
        }
    }
    //Push the distances to all nodes connected from the ith node in the locations array
    distMat.push(distanceMatrixForEachPlace);
}


var polyline,markers=[];

//3)Displaying and removing the lines and markers
function removeLinesAndMarkers(){ 
    if(typeof polyline != "undefined")
    {
        mymap.removeLayer(polyline);
    }
    //Removing markers
  if(markers.length > 0)
  {
    for(var marker of markers)
    {
      mymap.removeLayer(marker);
    }
  }
}

var myIcon=L.divIcon({className:'leaflet-div-icon'});
//routes contains all the indices of the nodes that fall in the given path
function addLinesAndMarkers(route)
{
     var latlong=[];
     var dist=0;
     var distText;
     var vias=[],via;
     if(route==null)
     {
         via="No activity required";
     }
     else if(route!=null)
    {
         for(var routes in route)
        {
               var i=route[routes];
               var X,Y,name;
               X=locations[i].x;
               Y=locations[i].y;
               name=locations[i].name;
               //till the second last node in the array
               if(routes<route.length-1)
               {
                    var nextIdx=parseInt(routes)+1;
                    j=route[nextIdx];
                    dist+=distMat[i][j];
               }
               
               //We are at the destination node
               if(routes==(route.length-1))
               {
                   marker=L.marker([X,Y]).addTo(mymap);
               }
               else
               {
                   marker=L.marker([X,Y],{icon:myIcon}).addTo(mymap);
               }
               markers.push(marker);
               marker.bindPopup(name);

               //Taking closest node to source and closes node to dest as vias
               if(routes==1 || routes==(route.length-2))
               {
                    vias.push(name);
               }

               latlong.push([X,Y]);
        }

           if(vias[0].length>vias[1].length){
               via=`via ${vias[0]}`;
           }
           else{
               via=`via ${vias[1]}`;
           }
    }

        //Kilometeres or meters
        if(Math.floor(dist)<1000)
        {
            distText=Math.floor(dist) + ' m';
        }
        else
        {
            distText=(dist/1000).toFixed(1) + ' km';
        }

        //Render the polylines
        polyline=L.polyline(latlong,{color:'purple',weight:7}).addTo(mymap);
        if(latlong.length>0)
        {
              mymap.flyToBounds([latlong[0],latlong[latlong.length-1]],18);
        }

        var slider=document.getElementById('routeInfo');
        var details=document.getElementById('details');
        var distance=document.getElementById('distance');

        details.innerHTML=via+ " ";
        distance.innerHTML=distText;
        slider.classList.remove('closed');
}


//We will use a 1-d dp array to store the initial distances
function bellmanFord(src,dest){
    var route;
    if(src==dest){
        addLinesAndMarkers(null);
        return;
    }
    var n=distMat.length;
    //dp array will store the shortest distance to each connected node of the graph
    var dp=[];
    var nodes=[],route=[src];
    var firstNearest;
    //Initialize the dp array
    for(var i=0;i<n;i++){
        var init=Number.MAX_VALUE;
        if(i==dest){
            init=0;
        }
        dp.push(init);
    }
    //Outer loop is for relaxing all edges n-1 times
    for(var i=1;i<n;i++){
        //Traversing over the dist matrix of the graph
        for(var j=0;j<n;j++){
            var min_dist=Number.MAX_VALUE;
            for(var k=0;k<n;k++)
            {
                var temp=dp[k]+distMat[j][k];
                //checking for shorter path
                if(temp<min_dist){
                    min_dist=temp;
                    firstNearest=k;
                }
            }
            if(dp[j]>min_dist){
                //relax the node by updating the distance
                dp[j]=min_dist;
                //Storing the nearest neighbour for each node 
                nodes[j]=firstNearest;
            }
        }
    }
    // console.log(dp);
    // console.log(distMat);
    var j=src;
    //Logic to store the path
   do{
        route.push(nodes[j]);
        //Go to that neighbouring node
        j=nodes[j];
    } while(j!=dest)
   console.log(route);
   removeLinesAndMarkers();
   addLinesAndMarkers(route);
}
//bellmanFord(0,5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var sourceIndex=-1;
var destIndex=-1;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2)Styling the drop down menu and calling the Bellman Ford Algorithm
function autocomplete(inp,arr){
        var currentFocus;  //acts like an index for all elements in the html collection of the suggestions div
        inp.addEventListener("input",function(e){
             //val is containing the value of the entered input
             var suggestions,entry,i,val=this.value;
             
             //Close all open lists to refine results
             closeAllLists();
             //No value entered
             if(!val){
                 return false;
             }
             currentFocus=-1;
             //console.log(this);
             //Create a div element that will contain the items
             suggestions=document.createElement("div");
             suggestions.setAttribute("id",this.id+"autocomplete-list");
             suggestions.setAttribute("class","autocomplete-items");
             //console.log(suggestions);
             //Append the div as a child of autocomplete container
             this.parentNode.appendChild(suggestions);
             for(i=0;i<arr.length;i++){
                    //Check matching letters in the input and the location array
                    if(arr[i].name.substr(0,val.length).toUpperCase()===val.toUpperCase()){
                          //if above condition is satisfied create a div element for the matching element in the array
                          entry=document.createElement("div");
                          //Now inside the above created div we will be adding the info about the current array element
                          entry.innerHTML="<strong>"+arr[i].name.substr(0,val.length)+"</strong>";
                          //remaining string added as it is
                          entry.innerHTML+=arr[i].name.substr(val.length);
                          //Add input fields to the created entry div
                          entry.innerHTML+="<input id='placename' type='hidden' value='"+arr[i].name+"'>";
                          entry.innerHTML+="<input id='x' type='hidden' value='"+arr[i].x+"'>";
                          entry.innerHTML+="<input id='y' type='hidden' value='"+arr[i].y+"'>";
                          entry.innerHTML+="<input class='index' type='hidden' value='"+i+"'>";
                          //console.log(suggestions);
                          //Execute a function when a choice is clicked
                          entry.addEventListener('click',function(e)
                          {
                                //console.log(entry);
                                //console.log(this.getElementsByTagName("input"));
                                //Insert the value in the autocomplete text field
                                inp.value=this.getElementsByTagName("input")[0].value;
                                var name=inp.value;
                                var x=this.getElementsByTagName("input")[1].value;
                                var y=this.getElementsByTagName("input")[2].value;
                                var index=this.getElementsByTagName("input")[3].value;
                                //Create an object of the data
                                var place={
                                    "name":name,
                                    "x":x,
                                    "y":y,
                                    "index":index
                                }
                                //console.log(place);
                                //After both fields are filled then call the function
                                //Check what type of input field it is
                                if(inp.id==="sourceInput"){
                                    source=place;
                                    sourceIndex=place.index;
                                    //console.log(sourceIndex);
                                    if(destIndex!=-1){
                                        //call the bellmanFord function
                                        bellmanFord(sourceIndex,destIndex);
                                    }
                                }
                                    else if(inp.id==="destInput"){
                                        dest=place;
                                        destIndex=place.index;
                                        if(sourceIndex!=-1){
                                            bellmanFord(source.index,dest.index);
                                        }
                                    }
                                //Close all the open lists of autcomplete class
                                closeAllLists();
                          });
                          //Append entry as a child of the suggestions div
                          suggestions.appendChild(entry);
                    }
             }
        });
        //Even handler for navigating through keys
        inp.addEventListener("keydown",function(e){
           //Returns the entire suggestions div
           var x=document.getElementById(this.id+"autocomplete-list");
           //console.log(x);
           //x=x.getElementsByTagName("div");
          //console.log(x[1]);
           if(x){
            //The entire HTML clllection obtained from the suggestions div
              x=x.getElementsByTagName("div");
            //  console.log(x);
              if(e.keyCode==40){
                  //if down key arrow is pressed
                  currentFocus++;
                  //make current item more visible
                  addActive(x);
              }
              else if(e.keyCode==38){
                  //if up arrow is clicked
                  currentFocus--;
                  //make current item more visible
                  addActive(x);
              }
              else if(e.keyCode==13){
                  //if enter key is pressed prevent form frmo beng submitted in case input is not given
                  e.preventDefault();
                  if(currentFocus>-1){
                      //simulating a click on the active item if found 
                      if(x){
                        x[currentFocus].click();
                      }
                  }
              }
           }
        });

        //adding active class 
        function addActive(x){
            if(!x){
                return false;
            }
            removeActive(x);
            //Logic to prevent currentFocus from overflowing or underflowing
            if(currentFocus>=x.length){
                currentFocus=0;
            }

            if(currentFocus<0){
                currentFocus=(x.length-1);
            }
            //add autocomplete-active class
            x[currentFocus].classList.add("autocomplete-active");
        }

        //removing active class
        function removeActive(x){
            //remove active class from all active elements in the suggestions div
            for(var i=0;i<x.length;i++){
                 x[i].classList.remove("autocomplete-active");
            }
        }

        //function to close all active lists of the 
        function closeAllLists(el){
             //close all autocomplete lists in document except one passed as argument
            var openList=document.getElementsByClassName("autocomplete-items");
            //console.log(openList);
            for(var i=0;i<openList.length;i++){
                //if null is passed as the item to be deleted then all items are deleted
                if(el!==openList[i] && el!==inp){
                     //openList[i].parentNode.removeChild(openList[i]);    //older versions of JS
                    openList[i].remove();
                }
            }
        }

        //Close all active lists if any region in document is clicked
        document.addEventListener("click",function(e){
            // console.log("Hi");
            closeAllLists(e.target);
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//1)Extract data from the input element of source and dest and pass it in the autocomplete function
autocomplete(document.getElementById("sourceInput"),locations);
autocomplete(document.getElementById("destInput"),locations);


