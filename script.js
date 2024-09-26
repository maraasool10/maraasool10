function verificar() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value


    if(email == " ") {
        alert('Preencha os campos!')
    } else if (senha == " ") {
        alert('Campo de senha vazio!')

   }else{
    window.location="index(1).html"
   }

}