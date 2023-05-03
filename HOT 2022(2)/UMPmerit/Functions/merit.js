// BCS2243 WEB ENGINEERING [HOT]
// Student ID: CB20033
// Student Name: AHMAD ZHAFRAN FARUQI BIN ZAINAL ABIDIN
// Section: 02B
// Lecturer name: DR. NOORLIN MOHD ALI

function showLevel() {

    var activity1 = document.getElementById("activity1").value;
    var activity2 = document.getElementById("activity2").value;

    var levels = {
        "A100": "Residential College/Faculty/Club",
        "A150": "University",
        "A160": "District/State Level",
        "A170": "National",
        "A180": "International"
    };

    document.getElementById("activity_level1").value = levels[activity1];
    document.getElementById("activity_level2").value = levels[activity2];

}

function calculateActivityMerit() {

    var activity_level1 = document.getElementById("activity_level1").value;
    var activity_position1 = document.getElementById("activity_position1").value;

    var activity_level2 = document.getElementById("activity_level2").value;
    var activity_position2 = document.getElementById("activity_position2").value;

    var scores = {
        "Residential College/Faculty/Club": 10,
        "University": 20,
        "District/State Level": 30,
        "National": 40,
        "International": 50
    };

    var score1 = scores[activity_level1] * activity_position1;
    var score2 = scores[activity_level2] * activity_position2;

    document.getElementById("score1").value = score1;
    document.getElementById("score2").value = score2;
    document.getElementById("activity_merit").value = score1 + score2;

}

function calculatePositionMerit() {

    var club_position1 = document.getElementById("club_position1").value;
    var club_level1 = document.getElementById("club_level1").value;
    score3 = club_position1 * club_level1;

    var club_position2 = document.getElementById("club_position2").value;
    var club_level2 = document.getElementById("club_level2").value;
    score4 = club_position2 * club_level2;

    document.getElementById("score3").value = score3;
    document.getElementById("score4").value = score4;
    document.getElementById("position_merit").value = score3 + score4;

}

function calculateMerit() {

    var activity_merit = document.getElementById("activity_merit").value;
    var position_merit = document.getElementById("position_merit").value;

    document.getElementById("total_merit").value = +activity_merit + +position_merit;
    var total_merit = document.getElementById("total_merit").value;

    if (total_merit < 500) {
        document.getElementById("demo").innerHTML = (
            "<b>Sorry! You are not eligible for in-campus or DHUAM accommodation for the year 2023</b>"
        );
    }
    else if (total_merit < 1000) {
        document.getElementById("demo").innerHTML = (
            "<b>Congratulations! You are eligible for University Village (DHUAM) accommodation for the year 2023</b>"
        );
    }
    else {
        document.getElementById("demo").innerHTML = (
            "<b>Congratulations! You are eligible for in-campus accommodation for the year 2023</b>"
        );
    }

}