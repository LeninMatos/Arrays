const notas = [10, 6.5, 8, 7.5]                                                 // Guarda as notas

let somaDasNotas = 0                                                           // Inicializa a let somaDasNotas como 0     

for (let index = 0; index < notas.length; index++) {              // Para index começanco no 0 e indo até 4 (tamanho da array notas) e somando 1 a cada iteração 
    somaDasNotas += notas[index]                                       // Soma as notas e guarda na let somaDasNotas 
}

let media = somaDasNotas / notas.length

console.log(somaDasNotas)
console.log(media)
