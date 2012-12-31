window.addEventListener('load', function (){
/*	navigator.registerProtocolHandler (
	  "twitter", //protocol
	  "http://www.twitter.com/#!/%s", //handler
	  "Twitter" //title
	);*/
	setPile();
	document.ontouchstart = function(e){ 
	    e.preventDefault(); 
	};
});
function setPile() {
	var hour = calcTime('Zelda', -8).getHours();
	
	console.log(hour);
	var d = document.querySelector('pile');
	d.style.left = Math.round(100 - ((hour / 24) * 100)) + '%';

}
/**
based on @from http://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/6016329
**/
function calcTime(city, offset) {

    // create Date object for current location
    d = new Date();
    
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
    // return time as a string
    return nd;

}