
document.getElementById("botonRegistrarse").addEventListener("click",register);


document.getElementById("botonInicioSesion").addEventListener("click",iniciarSesion);




// funciones formulario de registro



var formularioLogin=document.querySelector('.formLogin');
var formularioRegister=document.querySelector('.formRegister');
var formularioContenedor=document.querySelector('.contenedorLogin-register');

var cajaLogin=document.querySelector('.logIn');
var cajaRegister=document.querySelector('.register');

function iniciarSesion(){
    formularioLogin.style.display="block";
    formularioContenedor.style.left="250px";
    formularioRegister.style.display="none";  
    cajaRegister.style.opacity="1";
    cajaLogin.style.opacity="0";

}


function register(){

    formularioRegister.style.display="block";
    formularioContenedor.style.left="700px";
    formularioLogin.style.display="none";
    cajaRegister.style.opacity="0";
    cajaLogin.style.opacity="1";

}



