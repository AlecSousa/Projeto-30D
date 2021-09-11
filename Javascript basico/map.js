/* MAP 
    - cria um novo array, a partir do array percorrido (array origina)
    - cria um novo array, com a mesma quantidade de itens do array original
    - aceita 3 parametros 
        - index do array
        - index
        - array completo
*/        



const numbers = [500,23213,1231,142123]; 

const newnumbers = numbers.map (function (number){
    return number +499
})


const games = [
{
    name: "pokemon sword",
    launch:  2019,
},
{
    name:  "pokemon firered",
    launch: 2004,
},
{
    name: "pokemon diamond",
    launch: 2006,
},
]

const criacao = games.map( function(lançamento){
    
    return lançamento.launch
})

// mapeia determinado item da variavel especificando qual item será selecionado e qual ficará escondido
