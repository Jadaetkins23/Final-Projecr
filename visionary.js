function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl, false);
    Httpreq.send(null);
    //console.log(typeof(Httpreq.responseText));
    console.log(Httpreq.responseText);
    console.log((Httpreq.responseText).length);
}

var item = Get("https://www.poemist.com/api/v1/randompoems")
console.log("huuh" + item);

