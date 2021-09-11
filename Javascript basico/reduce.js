/* 
    REDUCE 
- retorna um valor (pode ser um novo array, um objeto, string, number, etc..)
- aceita 4 parametros
    - acumulador 
    - valor atual 
    - index
    - array completo
    */

    const store = [10, 5, 6, 7, 23, 3];

    const sum = store.reduce( function(acumulador, valoratual){

        return valoratual + acumulador
    },5) 
    // colocar uma virgula apos a funçao determinando o valor indica o valor inicial do acumulador 

    console.log (sum)

    // reduzir um array para um valor em especifico, seja soma, subtração, multiplicação e etc..
