// funcion pagina cargada

function loadPage(){
    
    const formRegistro =document.getElementById('formRegister')
    formRegistro.addEventListener('submit',(e)=>{submit(e)})

    document.getElementById("botonRegistrarse").addEventListener("click",register);

    document.getElementById('botonInicioSesion').addEventListener("click",iniciarSesion);
}





// funciones formulario de registro/inicio de sesión



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


// ingreso de usuario


$('#logInButton').on('click'),()=>{

    let user = buscarUsuario(correo);

    if (user!=false){
        alert(`Bienvenido ${usuariosRegistrados[i].nombre}`)
    }else{
        alert("Usuario no registrado");
    }

    
}

// busqueda usuarios registrados


function buscarUsuario(correo){

    if (!localStorage.getItem("listaUsuarios")){
        return false;
    }

     usuariosRegistrados=JSON.parse(localStorage.getItem("listaUsuarios"));

    let encontrado=false;
    let i=0;

    while (!encontrado && i !=usuariosRegistrados.length){
        if(usuariosRegistrados[i].email== correo){
           
            return usuariosRegistrados[i];
        }

        i++;
        
    }

    return encontrado;

}


// registro de usuario


function handleForm(e){
    
    console.log('valor del input', e.target.value)    
    console.log('name del input', e.target.name)

    submit();

}





function submit(e){
    e.preventDefault();

    let arr=[];

     
    for (const element of e.target){
        element.value && arr.push({name:element.name, value:element.value})
        

    }
    
    let usuarioNuevo = new Usuario(arr[0].value, arr[1].value, arr[2].value)

    guardarUsuario(usuarioNuevo);
    
    console.log(usuarioNuevo);

    console.log(arr);
    
}

let listadoUsuarios="listadoUsuarios";
function guardarUsuario( usuarioNuevo){

    let usuariosRegistrados=new Array();
    usuariosRegistrados.push(usuarioNuevo);
    let usuariosRegistrados_string=JSON.stringify(usuariosRegistrados);
    localStorage.setItem(listadoUsuarios,usuariosRegistrados_string);
}


