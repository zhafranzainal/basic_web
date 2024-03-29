// BCS2243 WEB ENGINEERING [HOT]
// Student ID: CB20033
// Student Name: AHMAD ZHAFRAN FARUQI BIN ZAINAL ABIDIN
// Section: 02B
// Lecturer name: DR. NOORLIN MOHD ALI

function calculateVote() {

    var number_from1 = parseFloat(document.getElementById("number_from1").value.substring(3));
    var number_to1 = parseFloat(document.getElementById("number_to1").value.substring(3));
    var number_from2 = parseFloat(document.getElementById("number_from2").value.substring(3));
    var number_to2 = parseFloat(document.getElementById("number_to2").value.substring(3));

    document.getElementById("ballot_received1").value = number_to1 - number_from1 + 1;
    var ballot_received1 = parseFloat(document.getElementById("ballot_received1").value);
    document.getElementById("ballot_received2").value = number_to2 - number_from2 + 1;
    var ballot_received2 = parseFloat(document.getElementById("ballot_received2").value);
    document.getElementById("ballot_received").value = ballot_received1 + ballot_received2;

    var ballot_given1 = parseFloat(document.getElementById("ballot_given1").value);
    var ballot_given2 = parseFloat(document.getElementById("ballot_given2").value);
    document.getElementById("ballot_given").value = ballot_given1 + ballot_given2;
    var ballot_given = parseFloat(document.getElementById("ballot_given").value);

    document.getElementById("ballot_total").value = ballot_given;
    var ballot_total = parseFloat(document.getElementById("ballot_total").value);

    var vote1 = parseFloat(document.getElementById("vote1").value);
    var vote2 = parseFloat(document.getElementById("vote2").value);
    document.getElementById("vote_total").value = vote1 + vote2;
    var vote_total = parseFloat(document.getElementById("vote_total").value);

    document.getElementById("ballot_rejected").value = ballot_total - vote_total;

    var candidate_name1 = document.getElementById("candidate_name1").innerHTML;
    var candidate_name2 = document.getElementById("candidate_name2").innerHTML;

    if (vote1 > vote2) {
        document.getElementById("demo").innerHTML = (
            "The candidate selected: <b>" + candidate_name1 + "</b>"
        );
    }
    else {
        document.getElementById("demo").innerHTML = (
            "The candidate selected: <b>" + candidate_name2 + "</b>"
        );
    }

}

function addPrefix() {

    var faculty = document.getElementById("faculty").value;

    var number_from1 = document.getElementById("number_from1");
    var number_from2 = document.getElementById("number_from2");
    var number_to1 = document.getElementById("number_to1");
    var number_to2 = document.getElementById("number_to2");

    if (faculty == "coe") {
        number_from1.value = "CE";
        number_from2.value = "CE";
        number_to1.value = "CE";
        number_to2.value = "CE";
    }
    else if (faculty == "fkom") {
        number_from1.value = "FK";
        number_from2.value = "FK";
        number_to1.value = "FK";
        number_to2.value = "FK";
    }
    else if (faculty == "fsti") {
        number_from1.value = "FS";
        number_from2.value = "FS";
        number_to1.value = "FS";
        number_to2.value = "FS";
    }
    else if (faculty == "psm") {
        number_from1.value = "CM";
        number_from2.value = "CM";
        number_to1.value = "CM";
        number_to2.value = "CM";
    }
    else if (faculty == "fpi") {
        number_from1.value = "FM";
        number_from2.value = "FM";
        number_to1.value = "FM";
        number_to2.value = "FM";
    }
    else if (faculty == "ftka") {
        number_from1.value = "CT";
        number_from2.value = "CT";
        number_to1.value = "CT";
        number_to2.value = "CT";
    }
    else if (faculty == "ftkee") {
        number_from1.value = "ET";
        number_from2.value = "ET";
        number_to1.value = "ET";
        number_to2.value = "ET";
    }
    else if (faculty == "ftkkp") {
        number_from1.value = "PT";
        number_from2.value = "PT";
        number_to1.value = "PT";
        number_to2.value = "PT";
    }
    else if (faculty == "ftkpm") {
        number_from1.value = "MT";
        number_from2.value = "MT";
        number_to1.value = "MT";
        number_to2.value = "MT";
    }
    else {
        number_from1.value = "AT";
        number_from2.value = "AT";
        number_to1.value = "AT";
        number_to2.value = "AT";
    }

}

function showVote() {

    var candidate1 = document.getElementById("candidate1").value;
    var candidate2 = document.getElementById("candidate2").value;

    if (candidate1 == "basikal") {
        document.getElementById("vote1").value = 300;
    }
    else {
        document.getElementById("vote1").value = 390;
    }

    if (candidate2 == "basikal") {
        document.getElementById("vote2").value = 300;
    }
    else {
        document.getElementById("vote2").value = 390;
    }

}