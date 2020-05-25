const peso1 = 5.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

/* Explicação do código
Foi atribuido dois valores do tipo numéricos que são os valores peso1(5.0) e peso2(2.0)
E depois usando o comando console para exibir os valores das variaveis
E por fim O comando Number.isInteger para mostrar se os valores são verdadeiros ou falsos */

const avaliacao1 = 7.500
const avaliacao2 = 2.500

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media)
/* A média dessa operação será 6.071428571428571, uma forma para controlar essas casas decimais é usando 
o comando media.toFixed(2) */

console.log(media.toFixed(2))
/*Com isso a media ficar só 6.07 em vez de 6.071428571428571 */
console.log(media.toString(2)) //Transformar em binário
console.log(typeof media)

/* A dois tipos de number aqui, tem o Number(que é uma function ou uma função) e o number que 
é o tipo. Veja a diferença abaixo: */

console.log(typeof Number) // Se executamos, irar o mostrar que é uma Fuction e ñ do tipo number
