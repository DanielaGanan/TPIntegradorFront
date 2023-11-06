//Elementos HTML por su id

const resumen = document.querySelector("#resumen");
resumen.addEventListener("click",fResumen);

const borrar = document.querySelector("#borrar");
borrar.addEventListener("click",fBorrar);

let cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#correo");


//Funcion Resumen

function fResumen(evento) {

    evento.preventDefault();

    let cantidad = document.querySelector("#cantidad");
        console.log(cantidad.value);

    let categoria = document.querySelector("#categoria"); 
        console.log(categoria.value);

    let total;
        console.log(total);

    switch (categoria.value){
        case "Estudiante": {
            total = 200 * cantidad.value * 0.2;
            break;
        }
        case "Trainee": {
            total = 200 * cantidad.value * 0.5;
            break;
        }
        case "Junior": {
            total = 200 * cantidad.value * 0.85;
            break;
        }
    }

    //pantalla total
    document.querySelector("#total").textContent = `Total a pagar: $${total}`;

    console.log(total);

}

function fBorrar (evento) {

    cantidad.value = "";
    categoria.selectedIndex = 0;

    nombre.value = "";
    apellido.value = "";
    correo.value = "";

    document.querySelector("#total").textContent = `Total a pagar: $`;
}
