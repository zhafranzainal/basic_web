// BCS2243 WEB ENGINEERING [HOT]
// Student ID: CB20033
// Student Name: AHMAD ZHAFRAN FARUQI BIN ZAINAL ABIDIN
// Section: 02B
// Lecturer name: DR. NOORLIN MOHD ALI

const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

var currentDate = new Date();
var datetime =
    currentDate.getFullYear() + "-" +
    (currentDate.getMonth() + 1) + "-" +
    currentDate.getDate() + " " +
    currentDate.getHours() + ":" +
    currentDate.getMinutes() + ":" +
    currentDate.getSeconds() +
    "<br>DAY :- " + days[currentDate.getDay()];

document.getElementById("header_date").innerHTML = datetime;

function addThousandSeparator(id) {

    // Get the input element
    var input = document.getElementById(id);

    // Remove any non-numeric characters from the input
    inputCleaned = input.value.replace(/[^0-9.]/g, "");

    // Split the input value into the integer and decimal parts
    var parts = inputCleaned.split(".");

    // Add the thousand separator to the integer part
    var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // If there is a decimal part, add it back to the integer part
    if (parts.length > 1) {
        integerPart += "." + parts[1];
    }

    // Set the value of the input to the formatted value
    input.value = integerPart;

}

function checkBalance() {

    // Get the URL of the current page
    const url = new URL(window.location.href);

    // Create a new instance of the URLSearchParams interface
    const params = new URLSearchParams(url.search);

    // Use the get() method of the URLSearchParams interface to retrieve the input value
    var price_1g = params.get('gram1');
    price_1g = parseFloat(price_1g.replace(/\,/g, ''));

    var price_5g = params.get('gram5');
    price_5g = parseFloat(price_5g.replace(/\,/g, ''));

    var price_10g = params.get('gram10');
    price_10g = parseFloat(price_10g.replace(/\,/g, ''));

    var price_20g = params.get('gram20');
    price_20g = parseFloat(price_20g.replace(/\,/g, ''));

    var capital = params.get('capital');
    var cap_val = parseFloat(capital.replace(/\,/g, ''));

    document.getElementById("capitalOutput").value = capital;
    document.getElementById("quantity1").value = 0;
    document.getElementById("quantity5").value = 0;
    document.getElementById("quantity10").value = 0;
    document.getElementById("quantity20").value = 0;
    document.getElementById("balance").value = capital;

    if (cap_val <= 0) {
        return;
    }

    if (cap_val >= price_20g) {
        var quantity_20g = Math.floor(cap_val / price_20g);
        document.getElementById("quantity20").value = quantity_20g;
        cap_val -= price_20g * quantity_20g;
        document.getElementById("balance").value = cap_val.toFixed(2);
    }

    if (cap_val >= price_10g) {
        var quantity_10g = Math.floor(cap_val / price_10g);
        document.getElementById("quantity10").value = quantity_10g;
        cap_val -= price_10g * quantity_10g;
        document.getElementById("balance").value = cap_val.toFixed(2);
    }

    if (cap_val >= price_5g) {
        var quantity_5g = Math.floor(cap_val / price_5g);
        document.getElementById("quantity5").value = quantity_5g;
        cap_val -= price_5g * quantity_5g;
        document.getElementById("balance").value = cap_val.toFixed(2);
    }

    if (cap_val >= price_1g) {
        var quantity_1g = Math.floor(cap_val / price_1g);
        document.getElementById("quantity1").value = quantity_1g;
        cap_val -= price_1g * quantity_1g;
        document.getElementById("balance").value = cap_val.toFixed(2);
    }

}