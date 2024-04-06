function menuMobile() {
    const navbar = document.querySelector('nav');
    const menuToggler = document.getElementById('menu-toggler');

    menuToggler.addEventListener('click', function () {
        if (navbar.style.display == "none") {
            navbar.style.display = "block";
            menuToggler.classList.remove('bi-list')
            menuToggler.classList.add('bi-x')
        } else {
            navbar.style.display = "none";
            menuToggler.classList.add('bi-list')
            menuToggler.classList.remove('bi-x')
        }
    });
}
menuMobile();

function dropdown() {
    document.querySelector('.dropdown-language').addEventListener('click', function () {
        const dropdown = document.querySelector('.dropdown-list');

        if (dropdown.style.display == "none") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    })
}
dropdown();

function changeLanguage(language) {
    var languageSpan = document.getElementById('language');
    languageSpan.textContent = language
}
changeLanguage('English');