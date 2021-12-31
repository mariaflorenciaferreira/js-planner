
document.getElementById("botonRegistrarse").addEventListener("click",register);

document.querySelector('#botonInicioSesion').addEventListener("click",iniciarSesion);




// funciones formulario de registro/inicio de sesiòn



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



// localStorage datos del usuario

function handleForm(e){
    e.target.name==='nombre' && e.target.value.toUpperCase()


}


function submit(e){
    e.preventDefault()
    const arr=[]

    for (const element of e.target){
        console.log(element)
        element.value && arr.push({name: element.name, value: element.value })
    }
    console.log(arr)
    const user = new Usuario(arr[0].value, arr[1].value, arr[2].value,arr[3].value)
  user.save()
}