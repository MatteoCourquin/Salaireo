let charges = 0
const argentPoche = document.getElementById("total-argent-poche")
const champsCharges = document.getElementById("total-charges")
const champsChargesAuto = document.getElementById("total-charges-auto")
const calcul = document.querySelector('#calculate')

function calculArgent() {
    let inputChargesAuto = document.querySelector("input[name=input-charges-auto]:checked").value;

    const salaire = document.querySelector('#salaire').value
    charges = salaire * (inputChargesAuto / 100);
    let totalArgentPoche = salaire - charges

    if (totalArgentPoche <= 0) {
        argentPoche.style = "color: red;";
    } else if (totalArgentPoche > 0 && totalArgentPoche <= 700){
        argentPoche.style = "color: orange;";
    } else if (totalArgentPoche > 700){
        argentPoche.style = "color: green;";
    } else {
        argentPoche.style = "color: grey;";
    }

    champsChargesAuto.textContent = "Charges auto-entrepreneur : " + charges;
    argentPoche.textContent = "Argent de poche : " + totalArgentPoche;

}

calcul.addEventListener('click', calculArgent);