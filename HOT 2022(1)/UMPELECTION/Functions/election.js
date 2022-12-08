// BCS2243 WEB ENGINEERING [HOT]
// Student ID: CB20033
// Student Name: AHMAD ZHAFRAN FARUQI BIN ZAINAL ABIDIN
// Section: 02B
// Lecturer name: DR. NOORLIN MOHD ALI

function calculateVote() {

    var number_from1 = document.getElementById("number_from1").value.substring(3);
    var number_to1 = document.getElementById("number_to1").value.substring(3);
    var number_from2 = document.getElementById("number_from2").value.substring(3);
    var number_to2 = document.getElementById("number_to2").value.substring(3);

    document.getElementById("ballot_received1").value = (+number_to1 - +number_from1) + 1;
    var ballot_received1 = document.getElementById("ballot_received1").value;
    document.getElementById("ballot_received2").value = (+number_to2 - +number_from2) + 1;
    var ballot_received2 = document.getElementById("ballot_received2").value;
    document.getElementById("ballot_received").value = +ballot_received1 + +ballot_received2;

    var ballot_given1 = document.getElementById("ballot_given1").value;
    var ballot_given2 = document.getElementById("ballot_given2").value;
    document.getElementById("ballot_given").value = +ballot_given1 + +ballot_given2;
    var ballot_given = document.getElementById("ballot_given").value;

    document.getElementById("ballot_total").value = +ballot_given;
    var ballot_total = document.getElementById("ballot_total").value;

    var vote1 = document.getElementById("vote1").value;
    var vote2 = document.getElementById("vote2").value;
    document.getElementById("vote_total").value = +vote1 + +vote2;
    var vote_total = document.getElementById("vote_total").value;

    document.getElementById("ballot_rejected").value = +ballot_total - +vote_total;

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