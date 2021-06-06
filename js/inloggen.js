// Laat wachtwoord zien of niet!!
function DisplayPassword(){
    let input = document.getElementById('inputpassword');
    if (input.type === "password") {
        input.type = "text";
    } 
    else {
        input.type = "password";
    }
}

document.getElementById("showpassword").addEventListener('click', function(){
    DisplayPassword();
})


// Kijk of Invoervelden ingevuld zijn

var login = document.getElementById("loginbtn");
login.addEventListener("click", function(){
    let inputnaam = document.getElementById("gebruikersnaaminput");
    let inputpassword = document.getElementById("inputpassword");
    // console.log(inputnaam.value);
    // console.log(inputpassword.value);

    function validateinput(naam, password) {
        let x = true;
        let y = true;
        let inputfields = 0;
        
        if (naam.value != "") {
            if (naam.value.includes("`") || naam.value.includes(`"`) || naam.value.includes("'")) {
                // console.log("fout");
                x = true
            }
            else {
                // console.log("naam is goed");
                x = false
            }                
        }
        else {
            inputfields = 0;
        }

        if (password.value != "") {
            if (password.value.includes("`") || password.value.includes(`"`) || password.value.includes("'")) {
                // console.log("wrong");
                y = true
            }
            else {
                // console.log("ww is goed");
                y = false
            }
        }
        else {
            inputfields = 0
        }
        // if (naam.value == "" && password.value == "") {
            
        // }
        if (x == false && y == false) {
            inputfields = 1
        }
        return inputfields
    };

    let xa = document.getElementById("inlogerror");
    // console.log(xa.style.visibility) 

    if (validateinput(inputnaam, inputpassword) == 1) {
        // console.log(validateinput(inputnaam, inputpassword));
        xa.style.display = "none";

        // HIER MOET DE TIJDLIJN LINK KOMEN MET DE USER TOKEN ERIN,
        // nu staat er een tijdelijke html link in!!

        window.location.href = "../html/index.html"

    }
    else {
        if (inputnaam.value == "" && inputpassword.value == "") {
            xa.style.display = "none"
        }
        else {
            xa.style.display = "block";
            // console.log(validateinput(inputnaam, inputpassword));
            console.log("show error")
        }
    }
        
    // validateinput(inputnaam, inputpassword);
})