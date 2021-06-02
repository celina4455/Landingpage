let formular = document.forms.eventForm;
let besked = document.querySelector("#fejlbesked");

formular.onsubmit = function () {
    if (formular.navn.value == "" || formular.mail.value == "") {
        besked.innerHTML = "Skriv venligst dit navn og din email";
        return false;
    } else {
        besked.innerHTML = "Tak for din tilmelding " + formular.navn.value + "!";
        formular.reset();
    }

};
