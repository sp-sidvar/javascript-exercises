const removeFromArray = function(array, ...args) {
    let arrayResultado = array.filter(elemento => !args.includes(elemento));
    return arrayResultado
};

// Do not edit below this line
module.exports = removeFromArray;
