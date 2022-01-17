//Seleccionar contenido --- se recomienda usar los ID (#) en JS
//Si te equivocas con el selector JS solo arroja NULL.


/* 1) querySelector */
// Retorna uno o ningun selector que selecciones, es igual al CSS ejemplo:

const heading = document.querySelector('#heading'); /* document hace referencia a todo al HTML, el query nos retona 1 o 0 elementos */
heading.textContent = 'Nuevo Heading'; // Con esto modificamos el h2.
heading.classList.add('nueva-clase'); // Agregamos una nueva clase.

/* 2) querySelectAll */
//retorna todos los elementos que concuerden con el selector

const enlaces = document.querySelectorAll('.navegacion a'); //nos muestra todos los enlaces(a) que tenemos en el HTML dentro del div NAV
console.log(enlaces); //Podemos mostrar el enlaces que queramos con []
enlaces[0].textContent = 'Probando'; // Aquí le indicamos que nos cambio el texto del primer enlace
enlaces[0].href = 'https://www.google.com/'; //cambiamos el enlace
//enlaces[0].classList.remove('navegacion__enlace') //Cuando eliminamos clases no es necesario el punto inicial

/* 3) getElementByID, ya no se usa mucho en JS */

const heading2 = document.getElementById('heading'); // no es necesario el #
console.log(heading2);


/* COMO CREAR CODIGO HTML CON JS */

const nuevoEnlace = document.createElement('A'); /* Creamos un enlace y debe ser en mayúsculas */

//agregar el herf

nuevoEnlace.href = 'nuevo-enlace.html'; //Agregamos la ruta

//agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace' /* El nombre del enlace */
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace') /* La clase del enlace */

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // Lo agregal al final de los enlaces


/* EVENTOS AUTOMATICOS*/

//Los eventos los registra el usuario, como formularios, clicks,

/* console.log(1);

window.addEventListener('load', function(){  //window tiene mayor grado que el document, Load esperoa qque el JS y otros archivos carguen(img, styles, etc...)
    console.log(5);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLiaded', function(){//tiene que ser tal cual como esta el evento, en este solo esprea que se decargue el HTML, no le importa los otros archivos **Preguntar para trabajo**
    console.log(4);
})   
console.log(7);
 */

function ejemplo(){
    console.log('ejemplo')
}
/* Scroll */
//Cada vez que damos scroll en pantalla, se ejecuta el evento
/* window.onscroll = function(evento){
    console.log(evento);
} */


/* Clicks */
//Seleccionar elementos y asocilares un evento


/* const btnEnviar = document.querySelector('.boton--primero');
btnEnviar.addEventListener('click', function(evento){ /* Con evento obtenemos la información de lo que hace el usuario */
// el click esta asociado al boton, esto se asocia a elementos especificos, carros de compra, fotos, texto, etc
    //console.log(evento);
    //evento.preventDefault();//Esto es bueno para validar un formulario, si no esta completo no envia, ni carga la pagina ***IMPORTANTE PARA LOS FORMULARIOS***
    //console.log('enviar formulario'); //por default los boton tipo submit nos guardan la información en el servidor o donde los vayamos a guardar
//});


/* Eventos de los Inputs y textArea */

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leetTexto); /* Con el input validamos lo que el usuario esta escribiendo */
email.addEventListener('input', leetTexto);
mensaje.addEventListener('input', leetTexto);
formulario.addEventListener('submit', function(evento){ /* Es buena practica usar submit para valdiar formulario */
    //El submit esta asociado al formulario
        evento.preventDefault(); 
        // Validar el formulario

        const {nombre, email, mensaje} = datos;

        if(document.querySelector(".error")===null && document.querySelector(".completo")===null){ /* CON ESTE IF HACEMOS QUE NO SE REPITAN LAS FUNCIONES Y ASÍ EVITAMOS QUE SE CREEN MUCHOS PARRAFOS CON MUCHOS CLICKS */
            if(nombre ==='' || email ==='' || mensaje ===''){
                mostrarAlerta("Todos los campos deben ser obligatorios", true)

                return;
            }else{
                mostrarAlerta("Mensaje enviado correctamente");
            }
        }
    });
/*         console.log(nombre);
        console.log(email);
        console.log(mensaje); */


        // Enviar el formulario 
    
        //console.log('Enviando formulario');
    // En los formularios siempre se debe tener un input o button type="submit"
    

function leetTexto(e) {
    datos[e.target.id] = e.target.value;/* con target. seleccionamos el campo con el cual estamos trabajando */
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('completo')
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);


}

