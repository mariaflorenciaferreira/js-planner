// fecha del planner

let date =new Date();
document.querySelector("#numero").innerHTML= date.getDate();
document.querySelector("#año").innerHTML= date.getFullYear();


let nombreMes=mesFecha();
document.querySelector("#mes").innerHTML= `${nombreMes}`;

let diaSemana= diaFecha();
document.querySelector("#diaSemana").innerHTML= `${diaSemana}`;




// ingreso nuevas tareas

const contenedorDeTareas =$('.contenedorTareas');

const addNewTask = event => {
  event.preventDefault();
  const { value } = event.target.ingresoNuevaTarea;
  if(!value) return;
  const task = document.createElement('div');
  task.classList.add('task');
  task.addEventListener('click', changeTaskState)
  task.textContent = value;
  contenedorDeTareas.prepend(task);
  event.target.reset();
};
  

const changeTaskState = event => {

  // event.target.$('.task').toggleClass("cross") ;
  event.target.classList.toggle('done');
};


// ingreso cumpleaños

const contenedorCumpleaños= $('#contenedorCumpleaños');

const addNewBirthday = event => {
  event.preventDefault();
  const { value } = event.target.ingresoCumpleaños;
  if(!value) return;
  const cumple = document.createElement('div');
  cumple.classList.add('cumpleaños');
  cumple.textContent = value;
  contenedorCumpleaños.append(cumple);
  event.target.reset();
};


  


  
  




