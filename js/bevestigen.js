function bevestigen() {
    var link = window.location.href
    console.log(link)
    var token = link.replace("http://localhost/PeLeP/html/annuleren.html?token=", "")
    console.log(token)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"gebruiker_token":token});
    console.log(raw)
    
    //Hier staan de fetch option
    var requestOptions = {
    method: 'PUT',
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
