/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputelement = document.getElementById("input-el");

const convertbutton = document.getElementById("button-el");

const lengthtext = document.getElementById("Length-el");

const volumetext = document.getElementById("Volume-el");

const masstext = document.getElementById("Mass-el")



convertbutton.addEventListener("click", function(){
convertLength();
convertVolume();
convertMass();
})


function convertLength()
{
    let elementvalue = inputelement.value;


    convertedfeet = elementvalue * 3.281;

    convertedmeter = elementvalue * 0.3048;

    let output = `${elementvalue} meters = ${convertedfeet.toFixed(3)} feet | ${elementvalue} feet = ${convertedmeter.toFixed(3)} meters`;

    lengthtext.textContent = output;
}

function convertVolume()
{
    let elementvalue = inputelement.value;

    convertedliters  = elementvalue * 0.264;

    convertedgallons = elementvalue * 3.78541 ;

    let output = `${elementvalue} liters = ${convertedliters.toFixed(3)} gallons | ${elementvalue} gallons = ${convertedgallons.toFixed(3)} liters`;

    volumetext.textContent = output;
}

function convertMass()
{
    let elementvalue = inputelement.value;

    convertedkilos  = elementvalue * 2.204;

    convertedpounds = elementvalue * 0.4536 ;

    let output = `${elementvalue} kilos = ${convertedkilos.toFixed(3)} pounds | ${elementvalue} pounds = ${convertedpounds.toFixed(3)} kilos`;

    masstext.textContent = output;
}
