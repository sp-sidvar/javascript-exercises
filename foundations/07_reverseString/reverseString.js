// Recibir argumentos que utilizara la funcion - check
// Guardar argumento como array con metodo split - check
// Generar un array vacio - check
// Crear un bucle que itere sobre cada elemento del array recibido - check
// Agregar cada elemento al array vacio con el metodo unshift - check
// Convertir el array de resultado en un string - check
// Devolver el valor final del string - check

const reverseString = function(string) {
    let stringToArray = string.split('');
    let arrayResultado = [];
    for (let i of stringToArray){
        arrayResultado.unshift(i);
    }
    let arrayToString = arrayResultado.join('');
    return arrayToString
};

// Do not edit below this line
module.exports = reverseString;
