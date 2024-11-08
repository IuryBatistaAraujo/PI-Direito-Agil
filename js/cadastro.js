
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function toggleOABField() {
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const oabField = document.getElementById("oabField");

    if (userType === "advogado") {
        oabField.style.display = "block";
        oabField.querySelector("input").required = true;
    } else {
        oabField.style.display = "none";
        oabField.querySelector("input").required = false;
    }
}   


