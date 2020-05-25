const escola = "Pinheiro Machado"

console.log(escola.charAt(5))
//Pegar determinado caractere dentro da String
//Note que o número a ser exibido ñ será o número "e"
//mais sim a letra "i" pois a contargem começa com 0

console.log(escola.charCodeAt(4))
//Pegar valor na tabelas ascii, que é um código binário itilizado para representar símbolos.
console.log(escola.substring(8))
//Significa que ele vai transmintir a partir do número 8.
console.log(escola.substring(0, 8))
//Vai transmintir do valor 0 até o 8, mais ñ vai aparacer o valor de 8 ou seja o M.
console.log('Aqui é a Escola '.concat(escola).concat("?"))
//Pode atribuir novos elementos, sem mesmo mexer na frase de origem
console.log('Daniel,Luan,Maria' .split(','))
//Vai quebrar a String em três elementos separados por um virgula sendo ela o separador, formando um array.