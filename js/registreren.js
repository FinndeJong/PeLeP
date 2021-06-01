function registreren(){
    fetch('http://127.0.0.1:5000/gebruiker', {
    method: "GET",
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
        var aantal = 0;
        json.forEach(function() {
            var email_database = json[aantal].g.email;

            // Hier wordt gekeken of het email adres klopt
            var email = document.getElementById("email");
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
                console.log("1");
                document.getElementById("fout_email").innerHTML = "";
                console.log(email)
                console.log(email_database)
                if(email_database == email.value){
                    console.log("email in gebruik")
                    document.getElementById("fout_email").innerHTML = "email is al in gebruik";
                }
                return (true);
            } else if(email.value == ""){
                console.log("2");
                document.getElementById("fout_email").innerHTML = "Vul een email adres in";
                return (false);
            } else {
                document.getElementById("fout_email").innerHTML = "Vul een geldig email adres in";
            }  
            
            var gebruikersnaam = document.getElementById("gebruikersnaam").value;
            if (gebruikersnaam == ""){
                document.getElementById("fout_gebruikersnaam").innerHTML = "Vul een gebruikersnaam in"
            } else {
                console.log("correct")
                document.getElementById("fout_gebruikersnaam").innerHTML = ""
            }
        })
    })


}