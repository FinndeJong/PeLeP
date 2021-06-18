const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 
// USER
const gebruikerstoken = urlParams.get('user')
console.log(gebruikerstoken);
var gebruikersnaam = ""


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "gebruikerstoken": gebruikerstoken
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/speciafiekegebruiker", requestOptions)
  .then(response => response.text())
  .then(result => {
    // console.log(result);
    // console.log(typeof result);

    var results = JSON.parse(result);
    console.log(results);
    console.log(results[0]['g.gebruikersnaam'])

    console.log(typeof document.getElementById('gebruikersnaam'))
    gebruikersnaam = results[0]['g.gebruikersnaam'];

    username = document.getElementById('gebruikersnaam');
    username.innerHTML = results[0]['g.gebruikersnaam']

    })
  .catch(error => console.log('error', error));



// Reload function!!
function refreshPage(){
    // Stopt de reset van scrollen bij reload!!
    history.scrollRestoration = 'auto'
    // Relaod Page!!
    window.location.reload()
}


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
    console.log("yeah")
    // Hier wordt gecontroleerd of er een emoji, titel en tekst is gekozen
    if (emoji == "" || titel == "" || tekst == ""){
        console.log("goed")
        if (emoji == ""){
            document.getElementById("foutmelding").innerText = "Kies een emoji!"
        }
        if (titel == ""){
            document.getElementById("foutmelding").innerText = "Vul een titel in!"
        } 
        if (tekst == ""){
            document.getElementById("foutmelding").innerText = "Vul een tekst in!"
        }
        return
    } else {
    console.log("nee")
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
                comp3 = "aanpassingsvermogen"
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

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var tijd = date+' '+time;
        console.log(tijd)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        raw = JSON.stringify({"titel":titel,"tekst":tekst, "emoji":emoji, "datum-tijd":tijd, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4, "comp5":comp5, "comp6":comp6, "auteur": gebruikerstoken});
        
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

    setTimeout(function() { refreshPage(); }, 500);
}


// De data uit de database wordt op de pagina gezet
// fetch voor het overzicht van de pulses
setTimeout(function haalpulsesop(){
    fetch('http://127.0.0.1:5000/pulse/'+ gebruikerstoken, {
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
                var datum = json[pulse].p.datum;
                var pulse_token = json[pulse].p.pulse_token
                // Hier wordt gekeken of competentie 1 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
                if (comp1 == undefined || comp1 == ""){
                    var c1 = ""
                } else {
                    var c1 = `
                    <div class="comp p-3 pb-0">
                        <div class="chip">
                            <div class="color-`+comp1+`"></div>
                            <a class="comp`+id+`" id="competentie-link">`+comp1+`</a>
                        </div>
                    </div>`
                }
                // Hier wordt gekeken of competentie 2 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
                if (comp2 == undefined || comp2 == ""){
                    var c2 = ""
                } else {
                    var c2 = `
                    <div class="comp p-3 pb-0">
                        <div class="chip">
                            <div class="color-`+comp2+`"></div>
                            <a class="comp`+id+`" id="competentie-link">`+comp2+`</a>
                        </div>
                    </div>`
                }
                // Hier wordt gekeken of competentie 3 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
                if (comp3 == undefined || comp3 == ""){
                    var c3 = ""
                } else {
                    var c3 = `
                    <div class="comp p-3 pb-0">
                        <div class="chip">
                            <div class="color-`+comp3+`"></div>
                            <a class="comp`+id+`" id="competentie-link">`+comp3+`</a>
                        </div>
                    </div>`
                }
                // Hier wordt gekeken of competentie 4 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
                if (comp4 == undefined || comp4 == ""){
                    var c4 = ""
                } else {
                    var c4 = `
                    <div class="comp p-3 pb-0">
                        <div class="chip">
                            <div class="color-`+comp4+`"></div>
                            <a class="comp`+id+`" id="competentie-link">`+comp4+`</a>
                        </div>
                    </div>`
                }
                // Hier wordt gekeken of competentie 5 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
                if (comp5 == undefined || comp5 == ""){
                    var c5 = ""
                } else {
                    var c5 = `
                    <div class="comp p-3 pb-0">
                        <div class="chip">
                            <div class="color-`+comp5+`"></div>
                            <a class="comp`+id+`" id="competentie-link">`+comp5+`</a>
                        </div>
                    </div>`
                }
                // Hier wordt gekeken of competentie 6 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
                if (comp6 == undefined || comp6 == ""){
                    var c6 = ""
                } else {
                    var c6 = `
                    <div class="comp p-3 pb-0">
                        <div class="chip">
                            <div class="color-`+comp6+`"></div>
                            <a class="comp`+id+`" id="competentie-link">`+comp6+`</a>
                        </div>
                    </div>`
                }
                // hier wordt gekeken welke emoji is gekozen
                if (emoji == "boven_niveau"){
                    var e = 
                    `<div class="col p-3 me-2 pb-0 text-end">
                        <img src="../img/smile.png" id="emoji`+id+`" class="emoji">
                    </div>`
                }
                if (emoji == "op_niveau"){
                    var e = 
                    `<div class="col p-3 me-2 pb-0 text-end">
                        <img src="../img/meh.png" id="emoji`+id+`" class="emoji">
                    </div>`
                }
                if (emoji == "onder_niveau"){
                    var e = 
                    `<div class="col p-3 me-2 pb-0 text-end">
                        <img src="../img/sad (1).png" id="emoji`+id+`" class="emoji">
                    </div>`
                }

                // Hier word gekeken of er een reactie is op de checkpoint!!
                var reactions_hvl = Object.keys(json[pulse].p.comments).length
                var reaction_array = []
                var reaction_html = []

                // Hier word gekeken of er uberhaupt reacties zijn!!
                if (reactions_hvl > 0) {
                    for (let i = 0; i < reactions_hvl; i++) {
                        // console.log(json[pulse].p.comments[i]["reactie"])
                        reaction_array.push(json[pulse].p.comments[i]["reactie"])
                    }

                    // Voor elke reactie word hier een stukje html aangemaakt!!
                    reaction_array.reverse();
                    reaction_array.forEach(function(reactions){
                        rtest = `
                        <div class="row mt-4 mb-4 ps-5">
                            <div class="col-sm-3 text-center">
                            <img src="../img/pf.png" class="picture-react">
                            </div>
                            <div class="col-sm-8 pl-4">
                            <h5 class="fw-bold">Finn de Jong 28-04-2021</h5>
                            <p class="fs-pulse preserve-breaks">`+reactions+`</p>
                            </div>
                        </div>
                        
                        <hr class="style1">`
                        reaction_html.push(rtest)
                    })

                    console.log(reaction_html.join(""))
                    var r = reaction_html.join("")
                }
                else {
                    var r = "";
                }
                console.log("token:")
                console.log(pulse_token) 
                var link = "http://localhost/PeLeP/html/reactgast.html?token=" + pulse_token
                console.log(link)
                // hier word voor het id een 
                x = document.getElementById(id)
                x.innerHTML = `             
                <div class="container mb-4 mt-2" id="pulse-page">
                    <div class="row">
                        <div class="col p-3 ms-2 mb-0 pb-0">
                            <h3 id="titel`+id+`">`+g+`</h3>
                        </div>
                        `+e+`
                    </div>
                    <div class="row ps-3 pe-3" id="comp`+id+`">
                    `+c1+``+c2+``+c3+``+c4+``+c5+``+c6+`
                    </div>
                    <hr class="style1">
                    <div class="row mt-4 mb-4">
                        <div class="col-sm-3 text-center">
                            <img src="../img/DefaultAvatar.png" class="picture">
                        </div>
                        <div class="col-sm-8 pl-4">
                        <h4 class="fw-bold">`+gebruikersnaam+` `+datum+`</h4>
                        <p class="preserve-breaks" id="tekst`+id+`">`+t+`</p>
                        </div>
                    </div>
                    <hr class="style1">
                    `+r+`
                    <div class="row">
                        <div class="col-sm-1 text-end p-0 pb-3">
                            <img src="../img/share.png" class="icon" data-toggle="popover" html = "true" data-content="`+link+`">  
                        </div>
                        <div class="col-sm-1 text-center pb-3">
                            <img src="../img/edit (2).png" id="`+id+`" class="icon" data-bs-toggle="modal" data-bs-target="#bewerk-popup" onclick="bewerk_display(this.id)">
                        </div>
                        <div class="col-sm-9 pb-3">
                            <textarea class="form-control" id="react-area`+id+`" rows="2"></textarea>
                        </div>
                        <div class="col-sm-1 text-start p-0 pb-3">
                            <img src="../img/success (1).png" class="icon" id="`+id+`" onclick="send_reaction(this.id)">
                        </div>
                        <div id="pulse_token`+id+`" style="display: none;">`+pulse_token+`</div>
                    </div>
                </div>`
                pulse = pulse + 1
                console.log(emoji);
            })
            var popoverTriggerList = [].slice.call( document.querySelectorAll( '[data-toggle="popover"]' ) );
            var popoverList = popoverTriggerList.map( function( popoverTrigger )
            {
            console.log("yeh");
            return new bootstrap.Popover( popoverTrigger );
            } );
        })
}, 500);


// Hier word de reactie gepost naar database!!
//test verander de variabele!!
function send_reaction(id){
    console.log("clicked")
    console.log(id)
    var pulse_id = "react-area"+id
    var react_text = document.getElementById(pulse_id).value;
    token_id = "pulse_token" + id
    var token = document.getElementById(token_id).innerHTML;
    console.log(token)
    console.log(react_text);
    var commenter = "Lieke Crum"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "reactie": react_text,
        "pulse_token": token,
        "commenter": commenter
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

      setTimeout(function() { refreshPage(); }, 500);
}

function get_reacties(){
    console.log("reacties!!!!")
    fetch('http://127.0.0.1:5000/reacties', {
    method: "GET",
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        json.reverse();
        console.log(json)
    })
}

// Functie voor de bewerk popup
function bewerk_display(clicked_id){
    var titelid = "titel" + clicked_id;
    var titel = document.getElementById(titelid).innerHTML;
    var compid = "comp" + clicked_id;

    var pulse_tokenid = "pulse_token" + clicked_id;
    var pulse_token = document.getElementById(pulse_tokenid).innerText;
    console.log(pulse_token)
    // hier word gekeken of er 1 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[0] === "" || document.getElementsByClassName(compid)[0] === undefined){
        console.log("geen comp")
    }else{
        var comp1 = document.getElementsByClassName(compid)[0].innerHTML;
        var str = "img-" + comp1
        img = str.replace(/\s/g, '');

        var achtergrondid = comp1 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');

        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)

        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    // hier word gekeken of er 2 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[1] === "" || document.getElementsByClassName(compid)[1] === undefined){
        console.log("geen comp")
    }else{
        var comp2 = document.getElementsByClassName(compid)[1].innerHTML;
        var str = "img-" + comp2
        img = str.replace(/\s/g, '');
  
        var achtergrondid = comp2 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');

        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)

        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    // hier word gekeken of er 3 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[2] === "" || document.getElementsByClassName(compid)[2] === undefined){
        console.log("geen comp")
    }else{
        var comp3 = document.getElementsByClassName(compid)[2].innerHTML;
        var str = "img-" + comp3
        img = str.replace(/\s/g, '');

        var achtergrondid = comp3 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');

        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)

        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    // hier word gekeken of er 4 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[3] === "" || document.getElementsByClassName(compid)[3] === undefined){
        console.log("geen comp")
    }else{
        var comp4 = document.getElementsByClassName(compid)[3].innerHTML;
        var str = "img-" + comp4
        img = str.replace(/\s/g, '');
        
        var achtergrondid = comp4 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');

        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)

        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    // hier word gekeken of er 5 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[4] === "" || document.getElementsByClassName(compid)[4] === undefined){
        console.log("geen comp")
    }else{
        var comp5 = document.getElementsByClassName(compid)[4].innerHTML;
        var str = "img-" + comp5
        img = str.replace(/\s/g, '');
       
        var achtergrondid = comp5 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');

        var e = document.getElementById(img)
        var s = document.getElementById(achtergrond)

        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    // hier word gekeken of er 6 gekozen was in de oude pulse
    if (document.getElementsByClassName(compid)[5] == "" || document.getElementsByClassName(compid)[5] == undefined){
        console.log("geen comp")
    }else{
        var comp6 = document.getElementsByClassName(compid)[5].innerHTML;
        var str = "img-" + comp6
        img = str.replace(/\s/g, '');
 
        var achtergrondid = comp6 + "-bewerk"
        achtergrond = achtergrondid.replace(/\s/g, '');

        var e = document.getElementById(img);
        var s = document.getElementById(achtergrond);

        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
    var tekstid = "tekst" + clicked_id;
    // console.log(tekstid)
    var tekst = document.getElementById(tekstid).innerHTML;
    // console.log(tekst)
    // console.log(document.getElementById(tekstid))
    var emojiid = "emoji" + clicked_id;
    console.log(emojiid)
    var emoji = document.getElementById(emojiid).src;
    // console.log(document.getElementById(emojiid).src)
    // console.log(emoji)

    
    if (emoji == "http://127.0.0.1:5500/img/smile.png"){
        var a = document.getElementById("boven-bewerk");
        a.style.backgroundColor = "#D5DDE4";
        document.getElementById("op-bewerk").style.backgroundColor = "white";
        document.getElementById("onder-bewerk").style.backgroundColor = "white";
    } else if( emoji == "http://127.0.0.1:5500/img/meh.png"){
        var a = document.getElementById("op-bewerk");
        a.style.backgroundColor = "#D5DDE4";
        document.getElementById("boven-bewerk").style.backgroundColor = "white";
        document.getElementById("onder-bewerk").style.backgroundColor = "white";
    } else{
        var a = document.getElementById("onder-bewerk");
        a.style.backgroundColor = "#D5DDE4";
        document.getElementById("op-bewerk").style.backgroundColor = "white";
        document.getElementById("boven-bewerk").style.backgroundColor = "white";
    }
    
    document.getElementById("pulse_token").innerText = pulse_token;
    document.getElementById("popup-title-bewerk").value = titel;
    document.getElementById("popup-tekst-bewerk").value = tekst;

}

// Deze functie zorgt er voor dat de bewerk popup weer leeg is als je hem anuleerd
function leeg(){
    // hiermee wordt de achtergrondkleur van de comopetenties weet als ongeselecteerd
    var a = document.querySelectorAll(".popup");
    for (i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = "#f1f1f1";
    }
    // hiermee gaat het vinkje weer weg bij geselecteerde competenties
    var b = document.querySelectorAll(".img-gekozen");
    for (i = 0; i < b.length; i++) {
        b[i].style.display = "none";
}}

// Hier wordt gekeken welke emoji word gekozen bij het bewerken
let emoji_bewerk = ""
let emoji_op_bewerk = document.getElementById("op-bewerk");
let emoji_onder_bewerk = document.getElementById("onder-bewerk");
let emoji_boven_bewerk = document.getElementById("boven-bewerk");

emoji_onder_bewerk.addEventListener("click", function(){
    if(emoji_bewerk != "onder_niveau"){
        emoji = "onder_niveau";
        emoji_onder_bewerk.style.backgroundColor = "#D5DDE4"
        emoji_op_bewerk.style.backgroundColor = "white"
        emoji_boven_bewerk.style.backgroundColor = "white"
        emoji_op_bewerk.style.border = "none"
        emoji_boven_bewerk.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_onder_bewerk.style.border = "none"
        emoji_onder_bewerk.style.backgroundColor = "white"
        emoji_bewerk = ""
    };
    // console.log(emoji)
});

emoji_op_bewerk.addEventListener("click", function(){
    if(emoji_bewerk != "op_niveau"){
        emoji_bewerk = "op_niveau";
        emoji_op_bewerk.style.backgroundColor = "#D5DDE4"
        emoji_onder_bewerk.style.backgroundColor = "white"
        emoji_boven_bewerk.style.backgroundColor = "white"
        emoji_onder_bewerk.style.border = "none"
        emoji_boven_bewerk.style.border = "none"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_op_bewerk.style.border = "none"
        emoji_op_bewerk.style.backgroundColor = "white"
        emoji_bewerk = ""
    };
    // console.log(emoji)
});

emoji_boven_bewerk.addEventListener("click", function(){
    if(emoji_bewerk != "boven_niveau"){
        emoji_bewerk = "boven_niveau";
        emoji_boven_bewerk.style.backgroundColor = "#D5DDE4"
        emoji_onder_bewerk.style.border = "none"
        emoji_op_bewerk.style.border = "none"
        emoji_op_bewerk.style.backgroundColor = "white"
        emoji_onder_bewerk.style.backgroundColor = "white"
        // document.getElementById("foutmelding-emoji").innerText = ""
    } else {
        emoji_boven_bewerk.style.border = "none"
        emoji_boven_bewerk.style.backgroundColor = "white"
        emoji_bewerk = ""
    };
    // console.log(emoji)
});

// Hier wordt samenwerken geselecteerd en gedeselecteerd
let show_sam_bewerk = document.getElementById("samenwerken-bewerk");
var sam_bewerk = ""
show_sam_bewerk.addEventListener("click", function(){
    var e = document.getElementById("img-samenwerken")
    var s = document.getElementById("samenwerken-bewerk")
    if (e.style.display == 'inline-block') {
        console.log("ja")
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        console.log(e.style.display)
    } else {
        console.log("nee")
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
})

// Hier wordt reflecteren geselecteerd en gedeselecteerd
let show_ref_bewerk = document.getElementById("reflecteren-bewerk");
show_ref_bewerk.addEventListener("click", function(){
    var e = document.getElementById("img-reflecteren")
    var s = document.getElementById("reflecteren-bewerk")
    if (e.style.display == 'inline-block') {
        console.log("ja")
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        console.log(e.style.display)
    } else {
        console.log("nee")
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
})

// Hier wordt boodschap geselecteerd en gedeselecteerd
let show_boo_bewerk = document.getElementById("boodschapoverbrengen-bewerk");
show_boo_bewerk.addEventListener("click", function(){
    var e = document.getElementById("img-boodschapoverbrengen")
    var s = document.getElementById("boodschapoverbrengen-bewerk")
    if (e.style.display == 'inline-block') {
        console.log("ja")
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        console.log(e.style.display)
    } else {
        console.log("nee")
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
})

// Hier wordt aanpassingsvermogen geselecteerd en gedeselecteerd
let show_aan_bewerk = document.getElementById("aanpassingsvermogen-bewerk");
show_aan_bewerk.addEventListener("click", function(){
    var e = document.getElementById("img-aanpassingsvermogen")
    var s = document.getElementById("aanpassingsvermogen-bewerk")
    if (e.style.display == 'inline-block') {
        console.log("ja")
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        console.log(e.style.display)
    } else {
        console.log("nee")
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
})

// Hier wordt pro-actief geselecteerd en gedeselecteerd
let show_pro_bewerk = document.getElementById("pro-actief-bewerk");
show_pro_bewerk.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-pro-actief")
    var s = document.getElementById("pro-actief-bewerk")
    if (e.style.display == 'inline-block') {
        console.log("ja")
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        console.log(e.style.display)
    } else {
        console.log("nee")
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
})

// Hier wordt plannen geselecteerd en gedeselecteerd
let show_pla_bewerk = document.getElementById("plannen-bewerk");
show_pla_bewerk.addEventListener("click", function(){
    console.log(1)
    var e = document.getElementById("img-plannen")
    var s = document.getElementById("plannen-bewerk")
    if (e.style.display == 'inline-block') {
        console.log("ja")
        e.style.display = 'none'
        s.style.backgroundColor = '#f1f1f1'
        console.log(e.style.display)
    } else {
        console.log("nee")
        e.style.display = 'inline-block';
        s.style.backgroundColor = '#E0E0E0';
    }
})

function bewerken(){
    var titel = document.getElementById("popup-title-bewerk").value;
    var tekst = document.getElementById("popup-tekst-bewerk").value;
    var pulse_token = document.getElementById("pulse_token").innerText;
    if (emoji_bewerk == ""){
        if (document.getElementById("onder-bewerk").style.backgroundColor == "rgb(213, 221, 228)"){
            emoji_bewerk = "onder_niveau"
            console.log(emoji_bewerk)
        } else if(document.getElementById("op-bewerk").style.backgroundColor == "rgb(213, 221, 228)"){
            emoji_bewerk = "op_niveau"
            console.log(emoji_bewerk)
        } else if(document.getElementById("boven-bewerk").style.backgroundColor == "rgb(213, 221, 228)"){
            emoji_bewerk = "boven_niveau"
            console.log(emoji_bewerk)
        }
    } else {
        console.log(emoji_bewerk)
    }
    // Hier wordt gecontroleerd of er een emoji, titel en tekst is gekozen
    // if (emoji_bewerk == "" || titel == "" || tekst == ""){
    //     console.log("fout")
    //     if (emoji_bewerk == ""){
    //         document.getElementById("foutmelding-emoji").innerText = "Kies een emoji!"
    //     }
    //     if (titel == ""){
    //         document.getElementById("foutmelding-titel").innerText = "Vul een titel in!"
    //     } 
    //     if (tekst == ""){
    //         document.getElementById("foutmelding-tekst").innerText = "Vul een tekst in!"
    //     }
    // } else {
        console.log("door")
        // Hier word gekeken welke competenties er zijn toegevoegd
        var comp1 = "";
        var comp2 = "";
        var comp3 = "";
        var comp4 = "";
        var comp5 = "";
        var comp6 = "";
        console.log(comp1)
        if (document.getElementById("img-samenwerken").style.display == 'inline-block'){
            comp1 = "samenwerken"
            console.log(1)
            console.log(comp1)
        } 
        if (document.getElementById("img-reflecteren").style.display == 'inline-block'){
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
        if(document.getElementById("img-plannen").style.display == 'inline-block'){
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
        if(document.getElementById("img-boodschapoverbrengen").style.display == 'inline-block'){
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
        if(document.getElementById("img-pro-actief").style.display == 'inline-block'){
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
        if(document.getElementById("img-aanpassingsvermogen").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "aanpassingsvermogen"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "aanpassingsvermogen"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "aanpassingsvermogen"
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

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var tijd = date+' '+time;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        raw = JSON.stringify({"titel":titel,"tekst":tekst, "emoji":emoji_bewerk, "bewerkdatum":tijd, "pulse_token":pulse_token, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4, "comp5":comp5, "comp6":comp6});
        console.log(raw)
        
        //Hier staan de fetch option
        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        //Hier word gefetch en gekeken of er error zijn en de response word omgezet naar text en vervolgens word dat geconsole logged
        fetch("http://127.0.0.1:5000/bewerken", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        document.getElementById("exampleModal").style.display = "none"

        setTimeout(function() { refreshPage(); }, 500);
    }
// }
