/* JS voor validatie op PAGINA1 */
function login() {
  var name = document.getElementById("validationDefaul").value;

    if (name == "") {
      document.getElementById("invalid").innerText = "Vul uw naam in!";
    } else {
      console.log("success");
    }
}
