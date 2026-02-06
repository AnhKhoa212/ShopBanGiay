var btnOpen = document.querySelector(".tai-khoan-link");
var modal = document.getElementById("modal-login");
var btnClose = document.getElementById("nut-dong");

if (btnOpen) {
    btnOpen.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }
}

if (btnClose) {
    btnClose.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modalSignUp = document.getElementById("modal-signup");
var btnCloseSignUp = document.getElementById("nut-dong-signup");
var linkToSignUp = document.querySelector("#modal-login a");
var linkToLogin = document.getElementById("link-login-now");

if (linkToSignUp) {
    linkToSignUp.onclick = function(event) {
        event.preventDefault();
        document.getElementById("modal-login").style.display = "none";
        modalSignUp.style.display = "block";
    }
}

if (linkToLogin) {
    linkToLogin.onclick = function(event) {
        event.preventDefault();
        modalSignUp.style.display = "none";
        document.getElementById("modal-login").style.display = "block";
    }
}

if (btnCloseSignUp) {
    btnCloseSignUp.onclick = function() {
        modalSignUp.style.display = "none";
    }
}

window.onclick = function(event) {
    var modalLogin = document.getElementById("modal-login");
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}