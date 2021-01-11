import data from "data.js"
import {createTableElements} from "main.js";

document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements(data, "singlecity")
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

