// Recibir argumentos que se van a utilizar
// Definir caso especial al obtener valores negativos
// Definir bucle que me va a permitir repetir el codigo
//  - Crear un bucle que se repita n numero de veces segun el argumento obtenido
//  - Crear una variable que contenga el texto que se ira generando en cada iteracion
//  - Mostrar en pantalla el resultado obtenido


const repeatString = function(string, num) {
    stringRepetido = ''
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++){
            stringRepetido = stringRepetido + string
        }
    }
    return stringRepetido
};

// Do not edit below this line
module.exports = repeatString;
