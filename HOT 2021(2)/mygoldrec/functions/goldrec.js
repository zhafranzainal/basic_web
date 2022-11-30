// BCS2243 WEB ENGINEERING [HOT]
// Student ID: CB20033
// Student Name: AHMAD ZHAFRAN FARUQI BIN ZAINAL ABIDIN
// Section: 02B
// Lecturer name: DR. NOORLIN MOHD ALI

function addComma(price) {

    // Remove commas
    x = price ? parseFloat(price.replace(/,/g, '')) : 0;

    // Apply formatting
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

function checkBalance() {

    var price_1g = document.getElementById("gram1").value;
    var price_5g = document.getElementById("gram5").value;
    var price_10g = document.getElementById("gram10").value;
    var price_20g = document.getElementById("gram20").value;
    var cap_val = document.getElementById("capital").value;

    document.getElementById("capitalOutput").value = cap_val.toFixed(2);

    if (cap_val <= 0) {
        return;
    }

    else if (cap_val >= price_20g) {
        cap_val -= price_20g;

        document.getElementById("balance").value = cap_val;
    }

    else if (cap_val >= price_10g) {
        cap_val -= price_10g;

        document.getElementById("balance").value = cap_val;
    }

    else if (cap_val >= price_5g) {
        cap_val -= price_5g;

        document.getElementById("balance").value = cap_val;
    }

    else if (cap_val >= price_1g) {
        cap_val -= price_1g;

        document.getElementById("balance").value = cap_val;
    }

    else {
        return;
    }

}