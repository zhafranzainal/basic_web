var modal = document.querySelector(".modal-container");
var button = document.querySelector("button");
var btnClose = document.querySelector("span");

if (button) {
    button.addEventListener("click", function () {
        modal.style.visibility = "visible";
    });
}

if (btnClose) {
    btnClose.addEventListener("click", function () {
        modal.style.visibility = "hidden";
    });
}
