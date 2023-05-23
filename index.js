/*<---JAVASCRIPT --->*/
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');

formulario.addEventListener('submit', e => {
    //e.preventDefault(); /*Usamos preventDefault para que no envie los datos y no recargue la página*/
    e.validateInputs();
})

//*Configuramos las constantes de los mensajes de error y exito para que aparezca el icono al final del campo a rellenar*//
//*<-------ERROR---------->*//
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error"); /*Se usa querySelector para seleccionar un selector de la parte de CSS*/

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

//*<-------CONFIRMACIÓN---------->*//
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//* Expresión regular (REGEX) para letras y espacios, pueden llevar acentos*//
const isValidnombre = nombre => {
    const re = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    return re.test(String(nombre).toLowerCase());
}

const isValidapellido = apellido => {
    const re = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    return re.test(String(apellido).toLowerCase());
}

//* Expresión regular (REGEX) para mencionar que el campo debe seguir la estructura de un Email*//
const isValidcorreo = correo => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(correo).toLowerCase());
}

//*<------CONSTANTES PARA VALIDAR LOS INPUTS---->*//
const validateInputs = () => {
    const nombreValue = nombre.value;
    const correoValue = correo.value;
    const apellidoValue = apellido.value;

    //*<--------CAMPO NOMBRE---------->*//
     /*En el primer error se índica que aparecerá un texto en caso de que el campo este vacío, sin embargo el segundo error índica que el usuario
     no ha utilizado letras que es lo que se pide en la expresion regular indicada arriba, en el tercer caso se dará como válida si el usuario
    usa únicamente letras*/
    if(nombreValue === '') {
        setError(nombre, 'Nombre requerido');
    } else if (!isValidnombre(nombreValue)) {
        setError(nombre, 'Solo puede contener letras');
    } else {
        setSuccess(nombre); 
    }

       //*<--------CAMPO APELLIDO---------->*//
    if(apellidoValue === '') {
        setError(apellido, 'Apellido requerido');
    } else if (!isValidapellido(apellidoValue)) {
        setError(apellido, 'Solo puede contener letras');
    } else {
        setSuccess(apellido); 
    }

    //*<-------CAMPO CORREO ELECTRÓNICO---------->*//
     /*Usamos el anterior campo igual que en el nombre, en el primer error se índica que aparecerá un texto en caso de que el campo este vacío, sin embargo 
    el segundo error índica que el tipo del email tiene una configuración de correo determinada por la constante antes declarada de correoValido. 
    Si todo es correcto pasa a la tercera opción que se ejecuta cuando todo esta correcto*/
    if(correoValue === '') {
        setError(correo, 'Email Requerido');
    } else if (!isValidcorreo(correoValue)) {
        setError(correo, 'Email no válido');
    } else {
        setSuccess(correo);  
    }

    //*<---Creamos una variable que compruebe que las demás condiciones sean correctas para que aparezca el alert al hacer click en enviar------->*//
    if(nombreValue !== '' && isValidnombre(nombreValue) && apellidoValue !== '' && isValidapellido(apellidoValue) && correoValue !== '' && isValidcorreo(correoValue)){
        alert ("La inscripcion es correcta")
    }
  }

    






