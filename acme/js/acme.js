let navigationLink = document.getElementById("navigation");
navigationLink.addEventListener("click" , function(evt){
    // Get the navigation name 
    let navName = evt.target.innerHTML;
    switch(navName) {
      case"Home": 
      // removes the hide class
      document.getElementById("content").setAttribute('class', 'hide'); 
      // hides the status container
      document.getElementById("homepage").setAttribute('class', ''); 
      // Shows the Header
      // document.getElementById("welcome").setAttribute('class', '');
       
      break;
      default: 
      // Hides Home Page
      document.getElementById("homepage").setAttribute("class", "hide");
      // Shows Content
      document.getElementById("content").setAttribute("class", "");
      // Hides the Header
      // document.getElementById("welcome").setAttribute('class', 'hide');
      let URL = "/acme/js/acme.json";
fetch(URL)
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
  let nav = data[navName];

  let name = nav.name;
  console.log(name);
  let path = nav.path;
  console.log(path);
  let description = nav.description;
  console.log(description);
  let manufacturer = nav.manufacturer;
  console.log(manufacturer); 
  let price = nav.price;
  console.log(price);
  let reviews = nav.reviews;
  console.log(reviews);


document.getElementById("name").innerHTML = name;
document.getElementById("photo").setAttribute("src", path);
document.getElementById("description").innerHTML = description;
document.getElementById("manufacturer").innerHTML = manufacturer;
document.getElementById("item").innerHTML = reviews;
document.getElementById("price").innerHTML = price;
document.getElementById("title").innerHTML = nav.name;
 })
            evt.preventDefault();
          break;
  }
  
 })




/////////////////////////////////////////////////////////////////////////////////
function navigation (){
    let nav = '<li>Home</li>';
    let URL = "/acme/js/acme.json";
    fetch (URL)
    .then(function(response){
        if(response.ok){ 
         return response.json(); 
        } 
        throw new ERROR('Response not OK.');
    })
    .then(function (data) { 
        // Let's see what we got back
        console.log('Json object from navigation function:'); 
        console.log(data);

    let array = Object.keys(data);
    console.log(array);

    for (let i=0; i<array.length; i++) {
         nav += "<li>" + array[i] + "</li>";
    }
    document.getElementById("navigation").innerHTML = nav;
    })
    .catch(error => console.log('There was a navigation error: ', error))
}
navigation ();