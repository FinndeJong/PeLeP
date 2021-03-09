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

//de fetch waarmee data in de database wordt gezet en zichtbaar wordt op de pagina
function test(){
    fetch('http://127.0.0.1:5050/display', {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json();
    })
      .then(json => {
          console.log(json);
          document.getElementById("test").innerText = json[0].n.naam;
          document.getElementById("jaar").innerText = json[0].n.Leeftijd;
  })
      .catch(error => console.log('error', error));
  }
  window.onload = () => test();
  
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