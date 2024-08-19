const submitFunction = (event) => {
    const valido = validarFormulario() // esto va a ser true si el formulario es válido
    if(!valido)
        event.preventDefault() // previene que se actualice la página
    else{
        event.preventDefault()
        alert(
            "Los datos ingresados son: \n" +
            "Nombre: " + document.getElementById("nombre").value + "\n" +
            "Apellido: " + document.getElementById("nombre").value + "\n" +
            "Email: " + document.getElementById("nombre").value + "\n" +
            "Edad: " + document.getElementById("nombre").value + "\n" +
            "Actividad: " + document.getElementById("nombre").value + "\n" +
            "Nivel de estudio: " + document.getElementById("nombre").value + "\n" 
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) // escucha el envío del formulario, accion por la cual se envía el formulario, en este caso, el botón

function validarFormulario(){
    const camposTexto = document.querySelectorAll('input[type="text"]')
    let valido = true


    // Validación campos texto
    camposTexto.forEach((campo) => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == 0){
            mostrarError(errorCampo, "El campo " + campo.id + " es requerido")
            valido = false
        }
        else if(campo.value.length < 3){
            mostrarError(errorCampo, "El campo " + campo.id + " debe tener al menos 3 caracteres")
            valido = false
        }
        else
            ocultarError(errorCampo)
    })

    // Validación email
    const email = document.getElementById("email")
    let errorEmail = document.getElementById("errorEmail")

    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value))
        ocultarError(errorEmail)
    else{
        mostrarError(errorEmail, "Ingrese un correo electrónico válido")
        valido = false
    }

    // Validación edad
    const edad = document.getElementById("edad")
    const errorEdad = document.getElementById("errorEdad")

    if(edad.value < 18){
        mostrarError(errorEdad, "Debes ser mayor de edad para registrarte")
        valido = false
    }
    else
        ocultarError(errorEdad)

    // Validación actividad
    const actividad = document.getElementById("actividad")
    const errorActividad = document.getElementById("errorActividad")

    if(actividad.value.length == 0){
        mostrarError(errorActividad, "Debe seleccionar una actividad")
        valido = false
    }else{
        ocultarError(errorActividad)
    }

    // Validación nivel de estudio
    const nivelEstudio = document.getElementById("nivelEstudio")
    const errorNivelEstudio = document.getElementById("errorNivelEstudio")
    if(nivelEstudio.value.length == 0){
        mostrarError(errorNivelEstudio, "Debe seleccionar un nivel de estudio")
        valido = false
    }

    const aceptoTerminos = document.getElementById("aceptoTerminos")
    const errorAceptoTerminos = document.getElementById("errorAceptoTerminos")
    
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, "Debes aceptar los términos y condiciones")
        valido = false
    }
    else
        ocultarError(errorAceptoTerminos)

    
    return valido

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje
    elemento.style.display = "block"
}

const ocultarError = (elemento) => {
    elemento.textContent = ""
    elemento.style.display = "none"
}