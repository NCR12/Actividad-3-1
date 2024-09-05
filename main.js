// formulario text

const operaciones = prompt("Que operacion desea realizar 1 promedio de 3 numeros, 2 saber si el numero es + o -, opcion 3 calcular tu sueldo")

// convertiendo op en int

const opcion = Number(operaciones)

switch (opcion) {
    case 1: 
      promedio()
    break;

    case 2:
        posiOnega()
    break;
    
    case 3:
        sueldo()
    break;
    
    default:
        alert("El numero de operacion es null")
    break;

}

function promedio () {
    const n1 = Number (prompt("Ingresa el primer numero"))
    const n2 = Number (prompt("Ingresa el segundo numero"))
    const n3 = Number (prompt("Ingresa el tercer numero"))

    const resultado = (n1+n2+n3)/3

    alert("El promedio de los tres numeros es " + resultado)

}

function posiOnega () {
    const numero = Number(prompt ("Ingrese su Valor numerico"))

    if (numero > 0 ) {
        alert ("El numero es positivo:" + numero)
    } else{
        alert("El numero es negativo:" + numero)
    }
}

function sueldo() {
    const precioH = Number(prompt("Cual es el precio de tus horas"))

    const horasT = Number(prompt("Cuantas horas trabajaste"))

    const pago = precioH * horasT

    alert("Tu sueldo para este mes es de:" + pago)
}