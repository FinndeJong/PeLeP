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
var titel = document.getElementById("titel").value;
var tekst = document.getElementById("tekst").value;

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
        e.style.display = 'inline-block'
        console.log(1)
    } else {
        e.style.display = 'none';
        console.log(2)
    }
}
function ref(){
    document.getElementById("Reflecteren-kies").style.display = 'inline-block';
    console.log(sam)
}
function boo(){
    document.getElementById("Boodschap-kies").style.display = 'inline-block';
    console.log(sam)
}
function pro(){
    document.getElementById("Pro-actief-kies").style.display = 'inline-block';
    console.log(sam)
}
function aan(){
    document.getElementById("Aanpassingsvermogen-kies").style.display = 'inline-block';
    console.log(sam)
}
function pla(){
    document.getElementById("Plannen-kies").style.display = 'inline-block';
    console.log(sam)
}

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