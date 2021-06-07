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

// E-mail validation!!
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Kijk of Invoervelden ingevuld zijn!!
var login = document.getElementById("loginbtn");
login.addEventListener("click", function(){
    let inputemail = document.getElementById("emailinput");
    let inputpassword = document.getElementById("inputpassword");
    // console.log(inputnaam.value);
    // console.log(inputpassword.value);

    function validateinput(email, password) {
        let x = true;
        let y = true;
        let inputfields = 0;
    
        if (email.value != "") {
            if (email.value.includes("`") || email.value.includes(`"`) || email.value.includes("'")) {
                // console.log("fout");
                x = true
            }
            else {
                console.log(isValidEmail(email.value))
                if (isValidEmail(email.value) == true) {
                    x = false
                    console.log("email is goed");
                }
                else {
                    console.log("email error")
                }
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
        if (x == false && y == false) {
            inputfields = 1
        }
        return inputfields
    };

    let xa = document.getElementById("inlogerror");

    if (validateinput(inputemail, inputpassword) == 1) {
        xa.style.display = "none";

        // HIER MOET DE TIJDLIJN LINK KOMEN MET DE USER TOKEN ERIN,
        // nu staat er een tijdelijke html link in!!

        window.location.href = "../html/index.html"

    }
    else {
        if (inputemail.value == "" && inputpassword.value == "") {
            xa.style.display = "none"
        }
        else {
            xa.style.display = "block";
            console.log("show error")
        }
    }
})