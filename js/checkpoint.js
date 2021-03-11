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

function nieuw(){
var titel = document.getElementById("popup-title-input").value;
var tekst = document.getElementById("popup-pulse-context").value;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"titel":titel,"tekst":tekst});
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
function sam(){
    var e = document.getElementById("Samenwerken-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
        console.log(1)
    }else{
        e.style.display = 'none'
        console.log(2)    
    }
}
function sam1(){
    var e = document.getElementById("Samenwerken-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
    }
}
function ref(){
    var e = document.getElementById("Reflecteren-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
    }
}
function ref1(){
    var e = document.getElementById("Reflecteren-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
    }
}
function aan(){
    var e = document.getElementById("Aanpassingsvermogen-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
    }
}
function aan1(){
    var e = document.getElementById("Aanpassingsvermogen-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
    }
}
function boo(){
    var e = document.getElementById("Boodschap-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
    }
}
function boo1(){
    var e = document.getElementById("Boodschap-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
    }
}
function pla(){
    var e = document.getElementById("Plannen-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
    }
}
function pla1(){
    var e = document.getElementById("Plannen-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
    }
}
function pro(){
    var e = document.getElementById("Pro-actief-kies")
    if (e.style.display = 'none') {
        e.style.display = 'inline-block';
    }
}
function pro1(){
    var e = document.getElementById("Pro-actief-kies")
    if(e.style.display ===  'inline-block'){
        e.style.display = "none";
    }
}
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