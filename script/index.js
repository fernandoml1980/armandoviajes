var datos = function () { /*función para guardar los datos del formulario en variables*/
    nomyape = document.getElementById("nombre").value;
    telefeno = document.getElementById("telefono").value;
    correo = document.getElementById("mail").value;
    origen = document.getElementById("origen").value;
    destino = document.getElementById("destino").value;
    salida = document.getElementById("salida").value;
    regreso = document.getElementById("regreso").value;
    catidad = document.getElementById("cantidad").value;

    /*validar que los campos tengan información*/
    if (nomyape != "" && telefono != "" && correo != "" && origen != "" && destino != "" && salida != "" && regreso != "" && cantidad !="") {
        alert("Señor(a) "+nomyape + " la cotización se enviara al correo " + correo+" y nos contactaremos con usted al número "+telefeno);
    } else {
        alert("Ingrese información en todos los campos del formulario");
    }
} 