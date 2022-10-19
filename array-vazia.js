const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)

//No exemplo acima, podemos ver que o JavaScript criou o array e a guardou na variável arrayVazia, mas seu length é 0.

console.log(arrayVazia[0])

const arrayVazia1 = [,,,];
console.log(arrayVazia1.length)
console.log(arrayVazia1[0])
console.log(arrayVazia1[1])
console.log(arrayVazia1[2])

//Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

const arrayVazia2 = [,,,];
console.log(arrayVazia2.length)
arrayVazia2.push(50)
console.log(arrayVazia2)
console.log(arrayVazia2.length)

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.