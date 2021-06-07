function registreren(){
    fetch('http://127.0.0.1:5000/gebruiker', {
    method: "GET",
    })
        .then(response => response.json())
        .then(json => {
        var aantal = 0;
        json.forEach(function() {
            // Hier wordt gekeken of er een gebruikersnaam is ingevuld
            var gebruikersnaam = document.getElementById("gebruikersnaam").value;
            if (gebruikersnaam == ""){
                document.getElementById("fout_gebruikersnaam").innerHTML = "Vul een gebruikersnaam in"
            } else {
                document.getElementById("fout_gebruikersnaam").innerHTML = ""
            }

            // Hier wordt gekeken of de wachtwoorden zijn ingevuld en overeen komen
            var wachtwoord1 = document.getElementById("wachtwoord1").value;
            var wachtwoord2 = document.getElementById("wachtwoord2").value;
            if (wachtwoord1 == ""){
                document.getElementById("fout_wachtwoord").innerHTML = "Vul een wachtwoord in"
            } else {
                document.getElementById("fout_wachtwoord").innerHTML = ""
            }
            if (wachtwoord2 != wachtwoord1){
                document.getElementById("fout_herhaal_wachtwoord").innerHTML = "Uw wachtwoorden komen niet overeen"
            } else if(wachtwoord2 == ""){
                document.getElementById("fout_herhaal_wachtwoord").innerHTML = "Uw wachtwoorden komen niet overeen"
            } else{
                document.getElementById("fout_herhaal_wachtwoord").innerHTML = ""
            }

            // Hier wordt gekeken of het email adres klopt
            var email = document.getElementById("email");
            var email_database = json[aantal].g.email;
            var email_value = document.getElementById("email").value;
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
                if(email_database == email.value){
                    console.log("1")
                    document.getElementById("fout_email").innerHTML = "email is al in gebruik";
                } else {
                    document.getElementById("fout_email").innerHTML = "";
                    console.log("2")
                }
            } else if(email_value == ""){
                document.getElementById("fout_email").innerHTML = "Vul een email adres in";
                console.log("3")
            } else {
                document.getElementById("fout_email").innerHTML = "Vul een geldig email adres in";
                console.log("4")
            } 


         
            // var token_databse = json[aantal].g.token
            // var token =  Math.random().toString(36).substr(2); 
            // while (token == token_databse){
            //     console.log(token)
            //     console.log(token_databse)
            //     var token =  Math.random().toString(36).substr(2); 
            //     if (token != token_databse){
            //         console.log(token)
            //         console.log(token_databse)
            //         break
            //     }
            // } 
            aantal = aantal + 1
        })

        if (document.getElementById("fout_email").innerHTML == "" || document.getElementById("fout_email").innerHTML == undefined){
            console.log("email ingevuld")
            if(document.getElementById("fout_herhaal_wachtwoord").innerHTML == ""){
                console.log("herhaal ingevuld")
                if(document.getElementById("fout_wachtwoord").innerHTML == "" || document.getElementById("fout_wachtwoord").innerHTML == undefined){
                    console.log("wachtwoord ingevuld")
                    if(document.getElementById("fout_gebruikersnaam").innerHTML == "" || document.getElementById("fout_gebruikersnaam").innerHTML == undefined){
                        console.log("gebruikersnaam ingevuld")

                        var email = document.getElementById("email").value;
                        var wachtwoord = document.getElementById("wachtwoord1").value;
                        var gebruikersnaam = document.getElementById("gebruikersnaam").value;

                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                
                        raw = JSON.stringify({"email":email,"wachtwoord":wachtwoord, "gebruikersnaam":gebruikersnaam});
                        console.log(raw)
                        
                        //Hier staan de fetch option
                        var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                        };
                
                        //Hier word gefetch en gekeken of er error zijn en de response word omgezet naar text en vervolgens word dat geconsole logged
                        fetch("http://127.0.0.1:5000/nieuwe_gebruiker", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                    }

                }
            }
        }
    })
}