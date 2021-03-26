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
        if(document.getElementById("Pro-actief-kies").style.display == 'inline-block'){
            if (comp1 == ""){
                comp1 = "pro-actief werken"
                console.log(1)
                console.log(comp1)
            } else if (comp2 == ""){
                comp2 = "pro-actief werken"
                console.log(2)
                console.log(comp2)
            } else if (comp3 == ""){
                comp3 = "pro-actief werken"
                console.log(3)
                console.log(comp3)
            } else if (comp4 == ""){
                comp4 = "pro-actief werken"
                console.log(4)
                console.log(comp4)
            } else {
                comp5 = "pro-actief werken"
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
        fetch("http://127.0.0.1:5050/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}

// function test(){
//     fetch('http://127.0.0.1:5050/display', {
//       method: 'GET',
//       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//     }).then((response) => {
//       return response.json();
//     })
//       .then(json => {
//           console.log(json);
//           document.getElementById("test").innerText = json[0].n.naam;
//           document.getElementById("jaar").innerText = json[0].n.Leeftijd;
//   })
//       .catch(error => console.log('error', error));
//   }
//   window.onload = () => test();

fetch('http://127.0.0.1:5050/pulse', {
    method: "GET",
})
    .then(response => response.json())
    .then(json => {

        tabelbody = document.getElementById("timeline-container")
            //response is wat je uit je fetch krijgt
        // console.log(1)
        // console.log(json.length)

        // for(a = 0; a < json.length;){
        //     let row = document.createElement("div");
        //     row.setAttribute("id", a);
        //     console.log(a)
        //     a = a + 1
        //     tabelbody.appendChild(row);
        // }
        // console.log(json[0].n.titel)
        // console.log(json)
        var i = json;
        var pulse = 0;
        i.forEach(function() {
            let row = document.createElement("div");
            var id = pulse
            row.setAttribute("id", (id));
            tabelbody.appendChild(row);
            var g = json[pulse].n.tekst
            // console.log(g)
            x = document.getElementById(id)
            x.innerHTML = `<h1>`+g+`<h1>`
            console.log(x.innerHTML)
            pulse = pulse + 1
        })
    
        // for(a = 0; a < json.length; a++){
        //     let row = document.createElement("tr");
        //     console.log(2)
        //     tabelbody.appendChild(row);
        //     console.log(rows)
        // }

        // for(c = 0; c < json.length; c++){
        //         let id = c + "-" + 0;
        //         document.getElementById(id).innerHTML = json[c][1];
        //     }
        // var i = json;
        // var a = 0;
        // i.forEach(function() {
        //     var id2 = a + "-" + 1;
        //     let myid = a;
        //     let id3 = a + "-" + 2;
        //     console.log(a);
        //     let r = json[a][1];
        //     document.getElementById(id3).innerHTML = `<th><input type="checkbox" onclick="myFunction()" id="`+r+`"></th>`;
        //     document.getElementById(id2).innerHTML = `<th><a href="javascript:void(0)" onclick="toggle_visibility(id);" class="info" id="`+myid+`">Meer info</a></th>`;
        //     a = a + 1;
        // })
    })
