function bevestigen() {
    var link = window.location.href
    console.log(link)
    var banaan = link.replace("http://localhost/PeLeP/html/anuleren.html?token=", "")
    console.log(banaan)
}
