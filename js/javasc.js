function pulse() {
  var link = window.location.href
  console.log(link)
  var token = link.replace("http://localhost/PeLeP/html/anuleren.html?token=", "")
  console.log(token)

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"gebruiker_token":token});
  console.log(raw)
  
  //Hier staan de fetch option
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };

  //Hier word gefetch en gekeken of er error zijn en de response word omgezet naar text en vervolgens word dat geconsole logged
  fetch("http://127.0.0.1:5000/bevestigen", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


/* JS voor validatie op PAGINA1 */
function login() {
  var name = document.getElementById("validationDefaul").value;

    if (name == "") {
      document.getElementById("invalid").innerText = "Vul uw naam in!";
    } else {
      console.log("success");
      
      document.getElementsByClassName("container2")[0].style.display = "none"

      fetch('http://127.0.0.1:5000/pulse', {
        method: "GET",
    })
        .then(response => response.json())
        .then(json => {
            tabelbody = document.getElementById("timeline")
            var pulse = 0;
            var id = pulse
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
            // var reactions_hvl = Object.keys(json[pulse].p.comments).length
            // var reaction_array = []
            // var reaction_html = []

            // Variabelen hoeveel reacties!!
            // var r1 = 0;
            // var r2 = 1;
            // var r3 = 2;
            // var r4 = 3;
            // var r5 = 4;
            // var r6 = 5;
            // var r7 = 6;
            // var r8 = 7;
            // var r9 = 8;
            // var r10 = 9;

            // if (reactions_hvl > 0){
            //     for (let i = 0; i < reactions_hvl; i++) {
            //         // console.log(json[pulse].p.comments[i]["reactie"])
            //         reaction_array.push(json[pulse].p.comments[i]["reactie"])
            //     }

            //     reaction_array.forEach(function(reactions){
            //         rtest = `
            //         <div class="row mt-4 mb-4 ps-5">
            //             <div class="col-sm-3 text-center">
            //               <img src="../img/pf.png" class="picture-react">
            //             </div>
            //             <div class="col-sm-8 pl-4">
            //               <h5 class="fw-bold">Finn de Jong 28-04-2021</h5>
            //               <p class="fs-pulse preserve-breaks">`+reactions+`</p>
            //             </div>
            //         </div>
                    
            //         <hr class="style1">`
            //         reaction_html.push(rtest)
            //     })

            //     console.log(reaction_html.join(""))
            //     var r = reaction_html.join("")
            // }
            // else{
                var r = "";
            // }
            console.log("token:")
            console.log(pulse_token) 
            var link = "http://localhost/PeLeP/html/reactgast.html?token=" + pulse_token
            console.log(link)
            // hier word voor het id een 
            x = document.getElementById("timeline")
            x.innerHTML = ` 
            <div class="container mb-4 mt-2" id="pulse-page">
              <div class="row">
              <div class="col p-3 ms-2 mb-0 pb-0">
                  <h3 id="titel`+id+`">`+g+`</h3>
              </div>
              `+e+`
            </div>
          <!-- competenties & Emoji -->
          <div class="row ps-3 pe-3" id="comp`+id+`">
          `+c1+``+c2+``+c3+``+c4+``+c5+``+c6+`
          </div>
          
          <!-- Pulse met naam + datum -->
          <div class="row mt-4 mb-4 ps-5">
            <div class="col-sm-3 text-center">
                <img src="../img/pf.png" class="picture-react">
            </div>
            <div class="col-sm-8 pl-4">
              <h4 class="fw-bold">Lieke Crum `+datum+`</h4>
              <p class="preserve-breaks" id="tekst`+id+`">`+t+`</p>
            </div>
          </div>
          <hr class="style1">
          `+r+`
          <!-- Hier kan de gast zijn review schrijven + Verstuur button -->
          <div class="row">
            <div class="col-sm-9 pb-3">
              <textarea class="form-control" id="exampleFormControlTextarea2" name="react" placeholder="Type hier uw tekst in..." required></textarea>
            </div>
            <div class="col-sm-1 text-start p-0 pb-3">
              <img src="../img/success (1).png" class="icon" id="`+id+`" onclick="send_reaction(this.id)">
            </div>
            </div>
          </div>
        </div>`
        })
      }
}

