function initCo2Calculator() {
    var inputFieldKmBike = getKmBikeInputField().value;
    var inputFieldConsumptionCar = getConsumptionCarInputField().value;
    console.log("init",inputFieldKmBike)
    updateHTML(inputFieldKmBike, inputFieldConsumptionCar);
}

function calc(kmBike, consumptionCar) {

    var co2Bike = 0.005;
    var co2Car = consumptionCar * 25 / 100;
    var co2Difference = co2Car - co2Bike;

    var co2Savings = parseFloat((kmBike * co2Difference).toFixed(1));


    return co2Savings
}

function updateHTML(kmBike, consumptionCar) {
    co2Savings = calc(kmBike, consumptionCar);
    chickenSavings = chicken(co2Savings);
    document.getElementById("co2_calculator_result_value").innerHTML = co2Savings + " kg";
    document.getElementById("co2_chicken_result_value").innerHTML =  chickenSavings + " kg";
}


function getKmBikeInputField() {
    return document.getElementById("input_field_km_bike")
}

function getConsumptionCarInputField() {
    return document.getElementById("input_field_consumption_co2")
}
function chicken(co2Savings) {
    return parseFloat((co2Savings / 3.5).toFixed(1));
}

module.exports = {
    calc: calc,
    chicken: chicken
};
