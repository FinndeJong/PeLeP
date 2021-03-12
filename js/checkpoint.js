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

function nieuw(){

    var comp1 = "";
    var comp2 = "";
    var comp3 = "";
    var comp4 = "";
    var comp5 = "";
    var comp6 = "";
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

    var titel = document.getElementById("popup-title-input").value;
    var tekst = document.getElementById("popup-pulse-context").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = ""
    if (comp1 == "") {
        raw = JSON.stringify({"titel":titel,"tekst":tekst});
    }
    if ((comp1 != "") && (comp2 == "")) {
        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1});
    }
    if ((comp2 != "") && (comp3 == "")) {
        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2});
    }
    if ((comp3 != "") && (comp4 == "")) {
        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2, "comp3":comp3});
    }
    if ((comp4 != "") && (comp5 == "")) {
        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4});
    }
    if ((comp5 != "") && (comp6 == "")) {
        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4, "comp5":comp5});
    }
    if (comp6 != ""){
        raw = JSON.stringify({"titel":titel,"tekst":tekst, "comp1":comp1, "comp2":comp2, "comp3":comp3, "comp4":comp4, "comp5":comp5, "comp6":comp6});
    }
    
     
    console.log(raw)
    //Hier staan de fetch option
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    //Hier word gefetch en gekeken of er error zijn en de response word omgezet naar text en vervolgens word dat geconsole logged
    fetch("http://127.0.0.1:5050/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    
    }

// var comp1 = "";
// var comp2 = "";
// var comp3 = "";
// var comp4 = "";
// var comp5 = "";
// var comp6 = "";
// console.log(comp1)
// if(document.getElementById("Samenwerken-kies").style.display = 'inline-block'){
//     comp1 = "samenwerken"
//     console.log(comp1)
// }
// function sam(){
//     var e = document.getElementById("Samenwerken-kies")
//     var a = "ja"
//     if (a=="ja") {
//         e.style.display = 'inline-block'
//         a = "nee"
//         console.log(a)
//     } else if (a=="nee") {
//         e.style.display = 'none';
//         a = "ja"
//         console.log(a)
//     }
// }
// function ref(){
//     var e = document.getElementById("Reflecteren-kies")
//     if (e.style.display == 'none') {
//         e.style.display == 'inline-block'
//         console.log(1)
//     } else {
//         e.style.display = 'none';
//         console.log(2)
//     }
// }
// function boo(){
//     var e = document.getElementById("Boodschap-kies")
//     if (e.style.display == 'none') {
//         e.style.display = 'inline-block'
//         console.log(1)
//     } else {
//         e.style.display = 'none';
//         console.log(2)
//     }
// }
// function pro(){
//     var e = document.getElementById("Pro-actief-kies")
//     if (e.style.display == 'none') {
//         e.style.display = 'inline-block'
//         console.log(1)
//     } else {
//         e.style.display = 'none';
//         console.log(2)
//     }
// }
// function aan(){
//     var e = document.getElementById("Aanpassingsvermogen-kies")
//     if (e.style.display == 'none') {
//         e.style.display = 'inline-block'
//         console.log(1)
//     } else {
//         e.style.display = 'none';
//         console.log(2)
//     }
// }
// function pla(){
//     var e = document.getElementById("Plannen-kies")
//     if (e.style.display == 'none') {
//         e.style.display = 'inline-block'
//         console.log(1)
//     } else {
//         e.style.display = 'none';
//         console.log(2)
//     }
// }

// function competentie(){
//     var comp1 = document.getElementById().value;
//     var comp2 = ""
//     var comp3 = ""
//     var comp4 = ""
//     var comp5 = ""
//     var comp6 = ""

// }
// let sam = 'false'
// function samen(){
//     if (sam = 'true'){
//         sam = 'false'
//         document.getElementById("samenwerken").style.display = 'inline-block'
//         console.log(sam)
//     } else{
//         sam = 'true'
//         document.getElementById("samenwerken").style.display = 'none'
//         console.log(sam)
//     }
//     console.log("yeah")
// }

// function comp(){
//     if (sam = 'true'){
//         document.getElementById("samenwerken").style.display = 'inline-block'
//     } else{
//         document.getElementById("samenwerken").style.display = 'none'
//     }
// }