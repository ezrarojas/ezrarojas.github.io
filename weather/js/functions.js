// Variables for function to use 
let temp=31;
let speed=5;
let direction="S"; 

// windDial(direction);
// Weather Site JavaScript Functions
console.log('My javascript is being read.');

// Calculate the Windchill
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feels');

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

 ////////////////////////////////////////////////////////////
 
//Wind Dial Function
function windDial(direction){
// Get the wind dial container

let dial = document.getElementById("dial");
console.log(direction);

// Determine the dial class
switch (direction){
    case "North":
    case "N":
     dial.setAttribute("class", "n"); //"n" is the CSS rule selector
     break;
    case "NE":
    case "NNE":
    case "ENE":
     dial.setAttribute("class", "ne");
     break;
    case "NW":
    case "NNW":
    case "WNW":
     dial.setAttribute("class", "nw");
     break;
    case "South":
    case "S":
     dial.setAttribute("class", "s");
     break;
    case "SE":
    case "SSE":
    case "ESE":
     dial.setAttribute("class", "se");
     break;
    case "SW":
    case "SSW":
    case "WSW":
     dial.setAttribute("class", "sw");
     break;
    case "East":
    case "E":
     dial.setAttribute("class", "e");
     break;
    case "West":
    case "W":
     dial.setAttribute("class", "w");
     break;
   }
}
windDial(direction);
/////////////////////////////////////////////////////////////////
let phrase = "snow";
let condition = getCondition (phrase); console.log (condition);
function getCondition (phrase){ 
    console.log (phrase)
    if (phrase.includes ("clear") || phrase.includes("blue")||phrase.includes("sky")||phrase.includes("bright")) {
        return "clear";
    }
    else if (phrase.includes ("snow")||phrase.includes("cold")||phrase.includes("white")||phrase.includes("ice")) {
        return "snow";
    }
    else if (phrase.includes ("rain")||phrase.includes("wet")||phrase.includes("cold")) {
        return "rain";
    }
    else if (phrase.includes ("dark")||phrase.includes("cloud")||phrase.includes("gray")) {
        return "cloud";
    }
    else if (phrase.includes ("fog")||phrase.includes("dark")) {
        return "fog";
    }
}
function changeSummaryImage (condition) {
    let curWeather = document.getElementById("curWeather");
    console.log(condition);
    switch (condition) {
        case "clear":
            curWeather.setAttribute("class", "clear");
        break; 
        case "snow":
            curWeather.setAttribute("class", "snow");
        break;
        case "rain":
            curWeather.setAttribute("class", "rain");
        break;
        case "cloud":
            curWeather.setAttribute("class", "cloud");
        break;
        case "fog":
            curWeather.setAttribute("class", "fog");
        break;
    }
}
changeSummaryImage (condition);
let meter = 1514.246;
function convertMeter (meter){
    let convert = document.getElementById("meters");

    let feet = meter * 3.2808399;
    console.log(feet);

    feet = Math.floor(feet);
    
    convert.innerHTML = feet;  
}
 convertMeter (meter);
 
 //////////////////////////////////////////////////////////////////////////////

 // Convert, Format time to 12 hour format
function format_time(hour) {
    if(hour > 23){ 
        hour -= 24; 
}
let amPM = (hour > 11) ? "pm" : "am"; 
 if(hour > 12) { 
  hour -= 12; 
 } 
 if(hour == 0) { 
  hour = "12"; 
 } 
 return hour + amPM;
}
// Build the hourly temperature list
function buildHourlyData(nextHour,hourlyTemps) {
 // Data comes from a JavaScript object of hourly temp name - value pairs
 // Next hour should have a value between 0-23
// The hourlyTemps variable holds an array of temperatures
// Line 8 builds a list item showing the time for the next hour 
// and then the first element (value in index 0) from the hourly temps array
     let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
// Build the remaining list items using a for loop
     for (let i = 1, x = hourlyTemps.length; i < x; i++) {
      hourlyListItems += '<li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
     }
     console.log('HourlyList is: ' +hourlyListItems);
     return hourlyListItems;
    }
// Get the next hour based on the current time
let date = new Date(); 
let nextHour = date.getHours() + 1;

//////////////////////////////////////////////////////////////////////////////////////

