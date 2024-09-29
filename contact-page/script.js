var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if (btnSubmit) {
    btnSubmit.addEventListener('click', function () {
        modal.classList.add('show');
        const next = document.querySelector('.next');
        next.setAttribute('value', 'https://contact-page-by-zhafran.netlify.app/contact.html');
    });
}
