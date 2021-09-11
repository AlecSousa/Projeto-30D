/* 
 FILTER 
- cria um novo array, a partir do array percorrido (array original) 
- cria um novo array APENAS com os elementos filtrados 
- aceita 3 parametros
    - item do array
    - index
    - array completo
    */

    const numbers = [1, 2, 3, 4, 5];

    const newnumbers = numbers.filter( function(number){
        
        return number  > 1
    })

// filtra numeros com determinada condição (ex, numeros menores que 4 não irão ser selecionados) 
   