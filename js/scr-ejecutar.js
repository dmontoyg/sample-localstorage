/*Variables para la modal*/
var modal = document.getElementById("miModal");
var btn = document.getElementById("boton-guardar");
var span = document.getElementsByClassName("close")[0];

/*Al darle clic y abrir la modal*/
btn.onclick = function() {
  modal.style.display = "block";
}

/*Cierra la modal*/
span.onclick = function() {
  modal.style.display = "none";
}

/*Si le da clic afuera en cualquier lugar, cierra la modal*/
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function(){
    $('#boton-guardar').click(function(){

        /*Captura de datos*/
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        var cor = document.getElementById("correotxt").value;
        var tel = document.getElementById("telefonotxt").value;
        var dir = document.getElementById("direcciontxt").value;

        /*Guardando los datos*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
        localStorage.setItem("Correo", cor);
        localStorage.setItem("Telefono", tel);
        localStorage.setItem("Direccion", dir);

        /*Limpiando los campos*/
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
        document.getElementById("correotxt").value = "";
        document.getElementById("telefonotxt").value = "";
        document.getElementById("direcciontxt").value = "";
     });
 });