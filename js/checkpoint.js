function display() {
    let e = document.getElementById('popup')
    if (e.style.display = 'none') {
        e.style.display = 'block';
    }
}

let close_popup = document.getElementById("popup-cancel-button");
close_popup.addEventListener("click", function(){
    let x = document.getElementById("popup")
    if(x.style.display ===  "block"){
        x.style.display = "none";
    };
});


let show_samen = document.getElementById("samenwerken");
show_samen.addEventListener("click", function(){
    var e = document.getElementById("Samenwerken-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
 
    }
})
let show_sam = document.getElementById("sam");
show_sam.addEventListener("click", function(){
    var e = document.getElementById("Samenwerken-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
 
    }
})
function sam(){
    var e = document.getElementById("Samenwerken-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
 
    }
}
function sam1(){
    var e = document.getElementById("Samenwerken-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
        console.log(e.style.display)
    }
}
function ref(){
    var e = document.getElementById("Reflecteren-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
    }
}
function ref1(){
    var e = document.getElementById("Reflecteren-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
        console.log(e.style.display)
    }
}
function aan(){
    var e = document.getElementById("Aanpassingsvermogen-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
    }
}
function aan1(){
    var e = document.getElementById("Aanpassingsvermogen-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
        console.log(e.style.display)
    }
}
function boo(){
    var e = document.getElementById("Boodschap-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
    }
}
function boo1(){
    var e = document.getElementById("Boodschap-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
        console.log(e.style.display)
    }
}
function pla(){
    var e = document.getElementById("Plannen-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
    }
}
function pla1(){
    var e = document.getElementById("Plannen-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
        console.log(e.style.display)
    }
}
function pro(){
    var e = document.getElementById("Pro-actief-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(e.style.display)
    }
}
function pro1(){
    var e = document.getElementById("Pro-actief-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
        console.log(e.style.display)
    }
}
let emoji = ""
let emoji_op = document.getElementById("op");
let emoji_onder = document.getElementById("onder");
let emoji_boven = document.getElementById("boven");
emoji_onder.addEventListener("click", function(){
    if(emoji != "onder_niveau"){
        emoji = "onder_niveau";
        emoji_onder.style.backgroundColor = "#cfdafc"
        emoji_onder.style.border = "thin black solid"
        emoji_op.style.backgroundColor = "white"
        emoji_boven.style.backgroundColor = "white"
        emoji_op.style.border = "none"
        emoji_boven.style.border = "none"
        document.getElementById("foutmelding-emoji").innerText = ""
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
        emoji_op.style.backgroundColor = "#cfdafc"
        emoji_op.style.border = "thin black solid"
        emoji_onder.style.backgroundColor = "white"
        emoji_boven.style.backgroundColor = "white"
        emoji_onder.style.border = "none"
        emoji_boven.style.border = "none"
        document.getElementById("foutmelding-emoji").innerText = ""
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
        emoji_boven.style.border = "thin black solid"
        emoji_boven.style.backgroundColor = "#cfdafc"
        emoji_onder.style.border = "none"
        emoji_op.style.border = "none"
        emoji_op.style.backgroundColor = "white"
        emoji_onder.style.backgroundColor = "white"
        document.getElementById("foutmelding-emoji").innerText = ""
    } else{
        emoji_boven.style.border = "none"
        emoji_boven.style.backgroundColor = "white"
        emoji = ""
    };
    console.log(emoji)
});

var link = 0
function nieuw(){
    
    var titel = document.getElementById("popup-title-input").value;
    var tekst = document.getElementById("popup-pulse-context").value;
    if (emoji == "" || titel == "" || tekst == ""){
        if (emoji == ""){
            document.getElementById("foutmelding-emoji").innerText = "Kies een emoji!"
        }
        if (titel == ""){
            document.getElementById("foutmelding-titel").innerText = "Vul een titel in!"
        } 
        if (tekst == ""){
            document.getElementById("foutmelding-tekst").innerText = "Vul een tekst in!"
        }
    } else {
        console.log(emoji)
        var comp1 = "";
        var comp2 = "";
        var comp3 = "";
        var comp4 = "";
        var comp5 = "";
        var comp6 = "";
        var link = "1";
        console.log(comp1)
        if (document.getElementById("Samenwerken-kies").style.display == 'inline-block'){
            comp1 = "samenwerken"
            console.log(1)
            console.log(comp1)
        } 
        if (document.getElementById("Reflecteren-kies").style.display == 'inline-block'){
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
        if(document.getElementById("Plannen-kies").style.display == 'inline-block'){
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
        if(document.getElementById("Boodschap-kies").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "boodschap"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "boodschap"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "boodschap"
                console.log(3)
                console.log(comp3)
            } else {
                comp4 = "boodschap"
                console.log(4)
                console.log(comp4)
            }
        }
        if(document.getElementById("Pro-actief-kies").style.display == 'inline-block'){
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
        if(document.getElementById("Aanpassingsvermogen-kies").style.display == 'inline-block'){
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
        // raw = JSON.stringify({"titel":titel,"tekst":tekst,"comp1":comp1};
        console.log(raw)
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

        document.getElementById("popup").style.display = 'none'
    }
}

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
                var c1 = `<div id="`+comp1+`-kies1">
                <a class="competentie1"></a>
            </div>`
                console.log(1)
            } else {
                var c1 = ""
                console.log(1)
            }
            // Hier wordt gekeken of competentie 2 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp2 != undefined){
                var c2 = `<div id="`+comp2+`-kies1">
                <a class="competentie1"></a>
            </div>`
            console.log("2")
            } else {
                var c2 = ""
                console.log(2)
            }
            // Hier wordt gekeken of competentie 3 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp3 != undefined){
                var c3 = `<div id="`+comp3+`-kies1">
                <a class="competentie1"></a>
            </div>`
            console.log(3)
            } else {
                var c3 = ""
                console.log(3)
            }
            // Hier wordt gekeken of competentie 4 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp4 != undefined){
                var c4 = `<div id="`+comp4+`-kies1">
                <a class="competentie1"></a>
            </div>`
                console.log(4)
            } else {
                var c4 = ""
                console.log(4)
            }
            // Hier wordt gekeken of competentie 5 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp5 != undefined){
                var c5 = `<div id="`+comp5+`-kies1">
                <a class="competentie1"></a>
            </div>`
                console.log(c1)
            } else {
                var c5 = ""
                console.log(c1)
            }
            // Hier wordt gekeken of competentie 6 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
            if (comp6 != undefined){
                var c6 = `<div id="`+comp6+`-kies1">
                <a class="competentie1"></a>
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
            <div id="pulse-timeline">
            <div id="titel-vak">
                <h2 id="titel-bestaande-pulse" class="titel`+id+`">`+g+`</h2>
                <div id="competenties-gekozen1" class="comp`+id+`">
                    `+c1+``+c2+``+c3+``+c4+``+c5+``+c6+`
                </div>
                <h2 id="emoji-bestaande-pulse" class="emoji`+id+`">`+e+`</h2>
            </div>
            <div id="pulse">
                <div id="tekstvak">
                    <div class="profile-pic">
                    <img id="profile-pic" src="../img/pf.png">
                    </div>
                    <div id="tekst-pulse">
                        <p class="tekst`+id+`">`+t+`</p>
                    </div>
                </div>
            </div>
            <div class="pulse-icons">
                <div class="share-image share-styling icon-styling">
                    <img src="../img/share.png" id="`+id+`" alt="delen" class="share-image">
                </div>
                <div class="react-image react-styling icon-styling">
                    <img src="../img/reageren.png" id="`+id+`" alt="reageren" class="react-image">
                </div>
                <div class="edit-image edit-styling icon-styling">
                    <img src="../img/edit.png" id="`+id+`" alt="bewerken" class="edit-image">
                </div>
            </div>
        </div>`
            console.log(x.innerHTML)
            pulse = pulse + 1
        })
    })


/* JQuery auto-sizing textarea */
textarea = document.getElementById("react-textarea");
textarea.addEventListener('input', autoResize, false); 

function autoResize() { 
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px'; 
    let x = document.getElementById("share-icon"); 
    let y = document.getElementById("react-icon");
    let z = document.getElementById("edit-icon");
    console.log("scrollheight is:"+" "+ this.scrollHeight)
    
    
    /* Moving the icons with the auto sizing textarea! */
    if(this.scrollHeight > 30){
        x.style.marginTop = this.scrollHeight - 40 + 'px';
        y.style.marginTop = this.scrollHeight - 40 + 'px';
        z.style.marginTop = this.scrollHeight - 40 + 'px';
        /* Dit is om de console schoon te houden 
        console.log(x.style.marginTop, y.style.marginTop, z.style.marginTop)
        */
    }  
    
    if(this.scrollHeight == 30){
        y.style.marginTop = 3 + 'px';
        x.style.marginTop = 3 + 'px';
        z.style.marginTop = 3 + 'px';
        /* Dit is om de console schoon te houden
        console.log(x.style.marginTop, y.style.marginTop, z.style.marginTop)
        */
    }
}
/* reageren */

let react_pulse_screen = document.getElementById("react-icon");
react_pulse_screen.addEventListener("click", function(){
    console.log('nailed it');

    let reaction = document.getElementById("react-textarea").value;
    console.log("The reaction is: " + reaction);
    /*
    let pulse_id = x;
    console.log(pulse_id);
    */

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "reactie": reaction,
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



function bewerk_display(clicked_id){
    console.log("id:");
    console.log(clicked_id);
    let e = document.getElementById('popup-bewerken');
    if (e.style.display = 'none') {
        e.style.display = 'block';
    }
    var titelid = "titel" + clicked_id;
    console.log(titelid)
    var titel = document.getElementsByClassName(titelid)[0].innerHTML;
    console.log(document.getElementsByClassName(titelid)[0])
    console.log("titel:")
    console.log(titel)
    var compid = "comp" + clicked_id;
    var comp = document.getElementsByClassName(compid)[0].value;
    var tekstid = "tekst" + clicked_id;
    console.log(tekstid)
    var tekst = document.getElementsByClassName(tekstid)[0].innerHTML;
    console.log(tekst)
    console.log(document.getElementsByClassName(tekstid)[0])
    var emojiid = "titel" + clicked_id;
    var emoji = document.getElementsByClassName("emojiid").value;

    document.getElementById("popup-title-input-bewerk").value = titel;
    document.getElementById("popup-pulse-context-bewerk").value = tekst

    // fetch('http://127.0.0.1:5000/pulse', {
    //     method: "GET",
    // })
    //     .then(response => response.json())
    //     .then(json => {

    //         i = 0
    //         while (json[].p.id = clicked_id ){
    //             var g = json[pulse].p.titel;
    //             var emoji = json[pulse].p.emoji;
    //             var comp1 = json[pulse].p.comp1;
    //             var comp2 = json[pulse].p.comp2;
    //             var comp3 = json[pulse].p.comp3;
    //             var comp4 = json[pulse].p.comp4;
    //             var comp5 = json[pulse].p.comp5;
    //             var comp6 = json[pulse].p.comp6;
    //             var t = json[pulse].p.tekst;
    //         } else {
    //             i = i + 1
    //         }
    //         })


}

let close_popup_bewerken = document.getElementById("popup-cancel-button-bewerken");
close_popup_bewerken.addEventListener("click", function(){
    let x = document.getElementById("popup-bewerken")
    if(x.style.display ===  "block"){
        x.style.display = "none";
    };
});

function bewerk(){
    
    var titel = document.getElementById("popup-title-input").value;
    var tekst = document.getElementById("popup-pulse-context").value;
    if (emoji == "" || titel == "" || tekst == ""){
        if (emoji == ""){
            document.getElementById("foutmelding-emoji").innerText = "Kies een emoji!"
        }
        if (titel == ""){
            document.getElementById("foutmelding-titel").innerText = "Vul een titel in!"
        } 
        if (tekst == ""){
            document.getElementById("foutmelding-tekst").innerText = "Vul een tekst in!"
        }
    } else {
        console.log(emoji)
        var comp1 = "";
        var comp2 = "";
        var comp3 = "";
        var comp4 = "";
        var comp5 = "";
        var comp6 = "";
        var link = "1";
        console.log(comp1)
        if (document.getElementById("Samenwerken-kies").style.display == 'inline-block'){
            comp1 = "samenwerken"
            console.log(1)
            console.log(comp1)
        } 
        if (document.getElementById("Reflecteren-kies").style.display == 'inline-block'){
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
        if(document.getElementById("Plannen-kies").style.display == 'inline-block'){
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
        if(document.getElementById("Boodschap-kies").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "boodschap"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "boodschap"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "boodschap"
                console.log(3)
                console.log(comp3)
            } else {
                comp4 = "boodschap"
                console.log(4)
                console.log(comp4)
            }
        }
        if(document.getElementById("Pro-actief-kies").style.display == 'inline-block'){
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
        if(document.getElementById("Aanpassingsvermogen-kies").style.display == 'inline-block'){
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
}}