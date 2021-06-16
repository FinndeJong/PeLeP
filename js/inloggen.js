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

    let invalidmail = document.getElementById("ongeldigemail");
    let invalidpsw = document.getElementById("ongeldigww");

    // console.log(inputnaam.value);
    // console.log(inputpassword.value);

    function validateinput(email, password) {
        let x = true;
        let y = true;
        let inputfields = 0;
    
        // Inputfields = 0 is Standaard variable
        // Inputfields = 1 is Goed ingevuld
        // Inputfields = 2 is alleen E-mail goed
        // Inputfields = 3 is alleen Wachtwoord goed

        if (email.value != "") {
            if (email.value.includes("`") || email.value.includes(`"`) || email.value.includes("'")) {
                // console.log("fout");
                x = true
            }
            else {
                console.log(isValidEmail(email.value))
                if (isValidEmail(email.value) == true) {
                    x = false
                    // console.log("email is goed");
                }
                else {
                    // console.log("email error")
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
        else if (x == false && y == true) {
            inputfields = 2
        }
        else if (x == true && y == false) {
            inputfields = 3
        }
        
        return inputfields
    };

    let xa = document.getElementById("inlogerror");
    // Kijken of alles is ingevuld en de correcte errors geven!!
    if (validateinput(inputemail, inputpassword) == 1) {
        invalidmail.style.display = "none";
        invalidpsw.style.display = "none";

        // API call om wachtwoord te veriefieren!!
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": inputemail,
        "wachtwoord": inputpassword
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/api/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }
    else {
        if (inputemail.value == "" && inputpassword.value == "") {
            invalidmail.style.display = "none"
            invalidpsw.style.display = "none"
        }
        else {
            if (validateinput(inputemail, inputpassword) == 2) {
                invalidpsw.style.display = "block"
                invalidmail.style.display = "none"
            }
            else if (validateinput(inputemail, inputpassword) == 3 || validateinput(inputemail, inputpassword) == 0) {
                invalidmail.style.display = "block"
                invalidpsw.style.display = "none"
            }
        }
    }    
})