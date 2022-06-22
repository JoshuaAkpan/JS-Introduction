// name, height, country 
myName = "Joshua Akpan";
myHeight = "5.9ft";
myCountry = "Nigeria";

nameText = "Name: " + myName;
heightText = "Height: " + myHeight;
countryText = "Country: " + myCountry;

let myElement = document.createElement("h1");
myElement.innerText = `${nameText} \n  ${heightText} \n ${countryText}`;

document.body.appendChild(myElement)
