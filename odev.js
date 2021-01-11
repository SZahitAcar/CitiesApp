import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */
document.querySelector("#populationBigger").addEventListener("click", () => {
  const popBigger = data.filter(city => city.population > 500000);
  createTableElements(popBigger, "allcities");
});

document.querySelector("#landAreaLess").addEventListener("click", () => {
  const areaLess = data.filter(city => city.landArea < 1000);
  createTableElements(areaLess, "allcities");
});

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const isPopLess = data.some(city => city.population < 100000);
  isPopLess ? alert('YES') : alert('NO');
});

document.querySelector("#isLandBigger").addEventListener("click", () => {
  const isAreaBigger = data.every(city => city.landArea > 100);
  isAreaBigger ? alert('YES') : alert('NO');
});

const cityNames  = data.map(city => city.name);
const selectCity = document.querySelector(".custom-select");
cityNames.forEach((element) => {
  const createOption = document.createElement("option");
  createOption.setAttribute("value", element);
  createOption.textContent = element;
  selectCity.appendChild(createOption);
});

selectCity.addEventListener("change", (element) => {
  const printCities = data.filter(cities => element.target.value === cities.name);
  createTableElements(printCities, "singlecity");
})

