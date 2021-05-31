function DisplayPassword(){
    let input = document.getElementById('inputpassword');
    if (input.type === "password") {
        input.type = "text";
    } 
    else {
        input.type = "password";
    }
}

document.getElementById("showpassword").addEventListener('click', function(){
    DisplayPassword();
})

