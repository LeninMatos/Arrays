const notas = [10, 6.5, 8, 7.5]  // Guardo o valor das notas

let somaDasNotas = 0 // Inicializa a let somaDasNotas

//CallBach arrowfunction
notas.forEach(nota => {           // Para cada nota da array "notas"
    somaDasNotas += nota      // Soma as notas e guarda na let somaDasNotas  
})

let somaDasNotas2 = 0 // Inicializa a let somaDasNotas
//CallBach function
notas.forEach(function (nota) {
    somaDasNotas2 += nota // Soma as notas e guarda na let somaDasNotas  
})

let media0 = somaDasNotas / notas.length
let media2 = somaDasNotas2 / notas.length

//console.log(media)
//console.log(media2)

// For com Matrizes

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {                              //Para i começando em zero e indo até o tamanho de notasGerais (3)
    for (let j = 0; j < notasGerais[i].length; j++) {                       //Para o j começando em zero e indo até o tamanho de cada array dentro de notasGerais, ou seja. notas 1, 2 e 3
        media += notasGerais[i][j] / notasGerais[i].length;          // dividir o tamanho de cada array dentro de notasGerais pela soma das notas de cada um e colocar na let média
    }
}

media = media / notasGerais.length

console.log(media)