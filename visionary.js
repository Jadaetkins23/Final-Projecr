GET https://www.poemist.com/api/v1/randompoems



// A standard http GET request should do it. Then you can use JSON.parse() to make it into a json object.
// function Get(yourUrl){
//     var Httpreq = new XMLHttpRequest(); // a new request
//     Httpreq.open("GET",yourUrl,false);
//     Httpreq.send(null);
//     return Httpreq.responseText;
// }
// then
// var json_obj = JSON.parse(Get(yourUrl));
// console.log("this is the author name: "+json_obj.author_name);
