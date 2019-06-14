// Variables for functtion to use 
const temp=31;
const speed=5;
// Weather Site JavaScript Functions
console.log('My javascript is being read.');
// Calculate the Windchill
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feels');
// Compute the windchill
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
console.log(wc);
// Round the answer down to integer
wc = Math.floor(wc);
// If chill is greater than temp, return the temp
wc = (wc > temp)?temp:wc;
 // Display the windchill
 console.log(wc);
 // wc = 'Feels like '+wc+'°F';
 feelTemp.innerHTML = wc;
 }
 buildWC(speed, temp);