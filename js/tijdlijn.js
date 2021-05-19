// Hier wordt gekeken welke emoji word gekozen
let emoji = ""
let emoji_op = document.getElementById("op");
let emoji_onder = document.getElementById("onder");
let emoji_boven = document.getElementById("boven");

emoji_onder.addEventListener("click", function(){
    if(emoji != "onder_niveau"){
        emoji = "onder_niveau";
        emoji_onder.style.backgroundColor = "#D5DDE4"
        emoji_op.style.backgroundColor = "white"
        emoji_boven.style.backgroundColor = "white"
        emoji_op.style.border = "none"
        emoji_boven.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_onder.style.border = "none"
        emoji_onder.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

emoji_op.addEventListener("click", function(){
    if(emoji != "op_niveau"){
        emoji = "op_niveau";
        emoji_op.style.backgroundColor = "#D5DDE4"
        emoji_onder.style.backgroundColor = "white"
        emoji_boven.style.backgroundColor = "white"
        emoji_onder.style.border = "none"
        emoji_boven.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_op.style.border = "none"
        emoji_op.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

emoji_boven.addEventListener("click", function(){
    if(emoji != "boven_niveau"){
        emoji = "boven_niveau";
        emoji_boven.style.backgroundColor = "#D5DDE4"
        emoji_onder.style.border = "none"
        emoji_op.style.border = "none"
        emoji_op.style.backgroundColor = "white"
        emoji_onder.style.backgroundColor = "white"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_boven.style.border = "none"
        emoji_boven.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

// Hier wordt samenwerken geselecteerd en gedeselecteerd
let show_sam = document.getElementById("samenwerken");
let sam = ""
show_sam.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-sam")
    var s = document.getElementById("samenwerken")
    if (sam == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        sam = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        sam = ""
    }
})

// Hier wordt reflecteren geselecteerd en gedeselecteerd
let show_ref = document.getElementById("reflecteren");
let ref = ""
show_ref.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-ref")
    var s = document.getElementById("reflecteren")
    if (ref == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        ref = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        ref = ""
    }
})

// Hier wordt boodschap geselecteerd en gedeselecteerd
let show_boo = document.getElementById("boodschap");
let boo = ""
show_boo.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-boo")
    var s = document.getElementById("boodschap")
    if (boo == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        boo = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        boo = ""
    }
})

// Hier wordt aanpassingsvermogen geselecteerd en gedeselecteerd
let show_aan = document.getElementById("aanpassingsvermogen");
let aan = ""
show_aan.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-aan")
    var s = document.getElementById("aanpassingsvermogen")
    if (aan == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        aan = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        aan = ""
    }
})

// Hier wordt pro-actief geselecteerd en gedeselecteerd
let show_pro = document.getElementById("pro-actief");
let pro = ""
show_pro.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-pro")
    var s = document.getElementById("pro-actief")
    if (pro == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        pro = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        pro = ""
    }
})

// Hier wordt plannen geselecteerd en gedeselecteerd
let show_pla = document.getElementById("plannen");
let pla = ""
show_pla.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-pla")
    var s = document.getElementById("plannen")
    if (pla == "") {
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
        pla = "gekozen"
        console.log(e.style.display);
    } else {
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        pla = ""
    }
})

// Met deze functie wordt de pulse toegevoegd aan de database
function nieuw(){
    
    var titel = document.getElementById("popup-title-input").value;
    var tekst = document.getElementById("popup-pulse-context").value;

    // Hier wordt gecontroleerd of er een emoji, titel en tekst is gekozen
    if (emoji == "" || titel == "" || tekst == ""){
        // if (emoji == ""){
        //     document.getElementById("foutmelding-emoji").innerText = "Kies een emoji!"
        // }
        // if (titel == ""){
        //     document.getElementById("foutmelding-titel").innerText = "Vul een titel in!"
        // } 
        // if (tekst == ""){
        //     document.getElementById("foutmelding-tekst").innerText = "Vul een tekst in!"
        // }
    } else {

        // Hier word gekeken welke competenties er zijn toegevoegd
        var comp1 = "";
        var comp2 = "";
        var comp3 = "";
        var comp4 = "";
        var comp5 = "";
        var comp6 = "";
        console.log(comp1)
        if (document.getElementById("img-sam").style.display == 'inline-block'){
            comp1 = "samenwerken"
            console.log(1)
            console.log(comp1)
        } 
        if (document.getElementById("img-ref").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "reflecteren"
                console.log(1)
                console.log(comp1)
            } else {
                comp2 = "reflecteren"
                console.log(2)
                console.log(comp2)
            }
        }
        if(document.getElementById("img-pla").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "plannen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "plannen"
                console.log(2)
                console.log(comp2)
            } else {
                comp3 = "plannen"
                console.log(3)
                console.log(comp3)
            }
        }
        if(document.getElementById("img-boo").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "boodschap overbrengen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "boodschap overbrengen"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "boodschap overbrengen"
                console.log(3)
                console.log(comp3)
            } else {
                comp4 = "boodschap overbrengen"
                console.log(4)
                console.log(comp4)
            }
        }
        if(document.getElementById("img-pro").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "pro-actief"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "pro-actief"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "pro-actief"
                console.log(3)
                console.log(comp3)
            } else if (comp4 == ""){
                comp4 = "pro-actief"
                console.log(4)
                console.log(comp4)
            } else {
                comp5 = "pro-actief"
                console.log(5)
                console.log(comp5)
            }
        }
        if(document.getElementById("img-aan").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "aanpassingsvermogen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "aanpassingsvermogen"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "aanpassimgsvermogen"
                console.log(3)
                console.log(comp3)
            } else if (comp4 == ""){
                comp4 = "aanpassingsvermogen"
                console.log(4)
                console.log(comp4)
            } else if(comp5 == ""){
                comp5 = "aanpassingsvermogen"
                console.log(5)
                console.log(comp5)
            } else {
                comp6 = "aanpassingsvermogen"
                console.log(6)
                console.log(comp6)
            }
        }

        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4, "comp5":comp5, "comp6":comp6, "emoji":emoji });
        
        //Hier staan de fetch option
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        //Hier word gefetch en gekeken of er error zijn en de response word omgezet naar text en vervolgens word dat geconsole logged
        fetch("http://127.0.0.1:5000/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        document.getElementById("exampleModal").style.display = "none"
    }
}

// De data uit de database wordt op de pagina gezet
// fetch voor het overzicht van de pulses
fetch('http://127.0.0.1:5000/pulse', {
    method: "GET",
})
    .then(response => response.json())
    .then(json => {
        console.log(json)
        json.reverse();
        console.log(json)
        tabelbody = document.getElementById("timeline")
        var i = json;
        var pulse = 0;
        i.forEach(function() {
            let row = document.createElement("div");
            var id = pulse
            row.setAttribute("id", (id));
            tabelbody.appendChild(row);
            // Hier word de informatie uit de database gehaald
            var g = json[pulse].p.titel;
            var emoji = json[pulse].p.emoji;
            var comp1 = json[pulse].p.comp1;
            var comp2 = json[pulse].p.comp2;
            var comp3 = json[pulse].p.comp3;
            var comp4 = json[pulse].p.comp4;
            var comp5 = json[pulse].p.comp5;
            var comp6 = json[pulse].p.comp6;
            var t = json[pulse].p.tekst;
            // Hier wordt gekeken of competentie 1 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp1 != undefined){
                var c1 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp1+`"></div>
                        `+comp1+`
                    </div>
                </div>`
                console.log(1)
            } else {
                var c1 = ""
                console.log(1)
            }
            // Hier wordt gekeken of competentie 2 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp2 != undefined){
                var c2 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp2+`"></div>
                        `+comp2+`
                    </div>
                </div>`
            console.log("2")
            } else {
                var c2 = ""
                console.log(2)
            }
            // Hier wordt gekeken of competentie 3 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp3 != undefined){
                var c3 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp3+`"></div>
                        `+comp3+`
                    </div>
                </div>`
            console.log(3)
            } else {
                var c3 = ""
                console.log(3)
            }
            // Hier wordt gekeken of competentie 4 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp4 != undefined){
                var c4 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp4+`"></div>
                        `+comp4+`
                    </div>
                </div>`
                console.log(4)
            } else {
                var c4 = ""
                console.log(4)
            }
            // Hier wordt gekeken of competentie 5 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp5 != undefined){
                var c5 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp5+`"></div>
                        `+comp5+`
                    </div>
                </div>`
                console.log(c1)
            } else {
                var c5 = ""
                console.log(c1)
            }
            // Hier wordt gekeken of competentie 6 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp6 != undefined){
                var c6 = `
                <div class="comp p-3 pb-0">
                    <div class="chip">
                        <div class="color-`+comp6+`"></div>
                        `+comp6+`
                    </div>
                </div>`
                console.log(c1)
            } else {
                var c6 = ""
                console.log(c1)
            }
            // hier wordt gekeken welke emoji is gekozen
            if (emoji == "boven_niveau"){
                var e = "&#128578;"
            }
            if (emoji == "op_niveau"){
                var e = "&#128528;"
            }
            if (emoji == "onder_niveau"){
                var e = "&#128578;"
            }
            // hier word voor het id een 
            x = document.getElementById(id)
            x.innerHTML = `             
            <div class="container mb-4 mt-2" id="pulse-page">
                <div class="row">
                    <div class="col p-3 ms-2 mb-0 pb-0">
                        <h3>`+g+`</h3>
                    </div>
                    <div class="col p-3 me-2 pb-0 text-end">
                        <img src="../img/sad (1).png" class="emoji">
                    </div>
                </div>
                <div class="row ps-3 pe-3">
                `+c1+``+c2+``+c3+``+c4+``+c5+``+c6+`
                </div>
                <hr class="style1">
                <div class="row mt-4 mb-4">
                    <div class="col-sm-3 text-center">
                        <img src="../img/pf.png" class="picture">
                    </div>
                    <div class="col-sm-8 pl-4">
                    <h4 class="fw-bold">Lieke Crum 26-04-2021</h4>
                    <p>`+t+`</p>
                    </div>
                </div>
                <hr class="style1">
                <div class="row">
                    <div class="col-sm-1 text-end p-0 pb-3">
                        <img src="../img/share.png" class="icon">
                    </div>
                    <div class="col-sm-1 text-center pb-3">
                        <img src="../img/edit (2).png" class="icon">
                    </div>
                    <div class="col-sm-9 pb-3">
                        <textarea class="form-control reacttxt`+id+`" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    <div class="col-sm-1 text-start p-0 pb-3">
                        <img src="../img/success (1).png" class="icon" id="reactbtn`+id+`">
                    </div>
                </div>
            </div>`
            console.log(x.innerHTML)
            pulse = pulse + 1
        })
    })


// Hier word de reactie gepost naar database!!
            //test verander de variabele!!
let tesssst = document.getElementById("reactbtn0");
let tessstreactie = document.getElementsByClassName("reacttxt0")[0];
console.log(tesssst);
console.log(tessstreactie);

tesssst.addEventListener("click", function(){
    console.log(tesssst);
    console.log(tessstreactie);
    console.log(tessstreactie2);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "reactie": tessstreactie2,
        "link": "link"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/api/react", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
})