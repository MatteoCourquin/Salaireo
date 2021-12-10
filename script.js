let charges
const error = document.querySelector('.champs-error')
const argentPoche = document.getElementById("total-argent-poche")
const champsCharges = document.getElementById("total-charges")
const champsChargesAuto = document.getElementById("total-charges-auto")
const calcul = document.querySelector('#calculate')

// =========================================================

function isNumber(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}

function calculArgent() {
    
    let inputChargesAuto = document.querySelector("input[name=input-charges-auto]:checked").value

    const salaire = document.querySelector('#salaire')

    if (isNumber(salaire.value)) {

        salaire.classList.remove("error");

        error.style = "display: none"
        champsChargesAuto.style = "display: block"
        argentPoche.style = "display: block"

        charges = salaire.value * (inputChargesAuto / 100)
        let totalArgentPoche = salaire.value - charges
    
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
        
    } else {
        salaire.classList.add("error");
        
        error.style = "display: block"
        champsChargesAuto.style = "display: none"
        argentPoche.style = "display: none"

        error.textContent = "Veuillez entrez un nombre";
    }

}

// =========================================================

calcul.addEventListener('click', calculArgent);