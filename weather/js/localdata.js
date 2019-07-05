let pageNav = document.getElementById('pagenav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('maincontent');
let weatherURL = "/weather/js/weather.json";

pageNav.addEventListener("click" , function(evt){

// Get the City Name 
let cityName = evt.target.innerHTML;
switch(cityName) {
  case "Franklin":
    case "Greenville":
      case "Springfield":
        evt.preventDefault();
      break; 
}
// fetchData(weatherURL);

//Function takes data from JSON file and inserts into HTML
// function fetchData(weatherURL){
//   let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
  .then(function(response) {
  if(response.ok){
  return response.json();
  }
  throw new ERROR('Network response was not OK.');
  })
  .then(function(data){
    // Check the data object that was retrieved
    console.log(data);
    // data is the full JavaScript object, but we only want the greenville part
    // shorten the variable and focus only on the data we want to reduce typing
    let g = data[cityName];

    // ************ Get the content ******************************

    // Get the location data
    let locName = g.City;
    let locState = g.State;
    // Put them together
    let fullName = locName+', '+locState;
    // See if it worked
    console.log('fullName is: '+fullName);
    let locElevation = g.Elevation;
    let locLongitude = g.Longitude;
    let locLatitude = g.Latitude;
    let locZip = g.Zip;

    // Get the temperature data
    let locTemp = g.Temp;
console.log(locTemp);
    let locMinTemp = g.Low;
    let locMaxTemp = g.High;

    // Get the wind data 
    let windSpeed = g.Wind;
    let direction = g.Direction;
console.log(windSpeed);
    let gusts = g.Gusts;
    // Get the current conditions
    let locCondition = g.Summary;
    console.log(g.Summary);

    // Get the hourly data 
    let locHourlyData = g.Hourly;
    console.log(locHourlyData);

    // ************ Display the content ******************************
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    let pageTitle = document.getElementById('pagetitle');
    // Create a text node containing the full name 
    let fullNameNode = document.createTextNode(fullName);
    // inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
    // When this is done the title should look something like this:
    // Greenville, SC | The Weather Site

    // Set the Location information
    // Get the h1 to display the city location
    let contentHeading = document.getElementById('place');
    contentHeading.innerHTML = fullName;
    // The h1 in main h1 should now say "Greenville, SC"
    convertMeter(locElevation);
    document.getElementById("long").innerHTML = locLongitude;
    document.getElementById("lat").innerHTML = locLatitude;
    document.getElementById("zip").innerHTML = locZip;


    // Set the temperature information
    document.getElementById("current").innerHTML = locTemp;
    document.getElementById("low").innerHTML = locMinTemp;
    document.getElementById("high").innerHTML = locMaxTemp;

    // Set the wind information
    document.getElementById("direction").innerHTML = direction;
    document.getElementById("mph").innerHTML = windSpeed;
    buildWC(windSpeed, locTemp);
    document.getElementById("gusts").innerHTML = gusts;
    //Changes dial based on direction
    windDial(direction);
    // Set the current conditions information
    document.getElementById("conditionstatus").innerHTML = locCondition;
    //use locCondition in getCondition and use output in changeSummaryImage
    
    console.log(locCondition);
    let phrase = getCondition(locCondition);
    console.log(phrase);
    changeSummaryImage(phrase);
  

    // Set the hourly temperature information
    //document.getElementById("hourly_data").innerHTML = locHourlyData;
    document.getElementById("forecast").innerHTML=buildHourlyData(nextHour,locHourlyData);

    // Change the status of the containers
    contentContainer.setAttribute('class', ''); // removes the hide class
    statusContainer.setAttribute('class', 'hide'); // hides the status container
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
// }
})