function display() {
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var icNum = document.myForm.icNum.value;

    document.getElementById("demo").innerHTML = (
        "<hr><br> Welcome " + name +
        "<br> Your email address is " + email +
        "<br> Your place of birth is " + getPOB(icNum)
    );
}

function validateEmail(email) {

    var mailFormat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

    if (email.value.match(mailFormat)) {
        display();
        return true;
    }

    else {
        return false;
    }

}

function getPOB(mykadNumber) {

    const birthState = [
        "N/A",
        "Johor",
        "Kedah",
        "Kelantan",
        "Malacca",
        "Negeri Sembilan",
        "Pahang",
        "Penang",
        "Perak",
        "Perlis",
        "Selangor",
        "Terengganu",
        "Sabah",
        "Sarawak",
        "Federal Territory of Kuala Lumpur",
        "Federal Territory of Labuan",
        "Federal Territory of Putrajaya"
    ];

    if (mykadNumber.substring(6, 8) == "01") {
        return birthState[1];
    }

    else if (mykadNumber.substring(6, 8) == "02") {
        return birthState[2];
    }

    else if (mykadNumber.substring(6, 8) == "03") {
        return birthState[3];
    }

    else if (mykadNumber.substring(6, 8) == "04") {
        return birthState[4];
    }

    else if (mykadNumber.substring(6, 8) == "05") {
        return birthState[5];
    }

    else if (mykadNumber.substring(6, 8) == "06") {
        return birthState[6];
    }

    else if (mykadNumber.substring(6, 8) == "07") {
        return birthState[7];
    }

    else if (mykadNumber.substring(6, 8) == "08") {
        return birthState[8];
    }

    else if (mykadNumber.substring(6, 8) == "09") {
        return birthState[9];
    }

    else if (mykadNumber.substring(6, 8) == "10") {
        return birthState[10];
    }

    else if (mykadNumber.substring(6, 8) == "11") {
        return birthState[11];
    }

    else if (mykadNumber.substring(6, 8) == "12") {
        return birthState[12];
    }

    else if (mykadNumber.substring(6, 8) == "13") {
        return birthState[13];
    }

    else if (mykadNumber.substring(6, 8) == "14") {
        return birthState[14];
    }

    else if (mykadNumber.substring(6, 8) == "15") {
        return birthState[15];
    }

    else if (mykadNumber.substring(6, 8) == "16") {
        return birthState[16];
    }

    else {
        return birthState[0];
    }

}