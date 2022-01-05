class Tareas {
    constructor(descripcionTarea, color) {
        this.descripcionTarea = descripcionTarea;
        this.color = color;
    }
};
    
class Cumpleaños {
     constructor(fechaNacimiento, nombreAmigo) {
        this.fechaNacimiento = fechaNacimiento;
        this.nombreAmigo = nombreAmigo;
      
    }
    
     
};

class Usuario{
    constructor(nombre, apellido, mail,contraseña){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.contraseña;
    }

    cambiarDatos(value){
        this[value.name]=value.value 
    }

    save(){
        localStorage.setItem('nombre',this.nombre)
        localStorage.setItem('apellido',this.apellido)
        localStorage.setItem('mail',this.mail)
    }

    
}