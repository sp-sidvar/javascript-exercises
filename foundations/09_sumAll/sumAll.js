const sumAll = function(inicio, fin) {
    if ((inicio > 0 && fin > 0) && (Number.isInteger(inicio) && Number.isInteger(fin))){
        if (inicio < fin){
            let Resultado = 0;
            for (let i = inicio; i <= fin; i++){
                Resultado += i;
            }
            return Resultado;
        } else {
            let Resultado = 0;
            for (let i = fin; i <= inicio; i++){
                Resultado += i;
            }
            return Resultado;
        }
    } else {
        return 'ERROR'
    }
    // return inicio.isInteger()

};

// Do not edit below this line
module.exports = sumAll;
