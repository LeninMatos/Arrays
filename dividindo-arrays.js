const nomes = [`João`, `Juliana`, `Ana`, `Caio`, `Laura`, `Marjorie`, `Guilherme`, `Aline`, `Fabiana`, `André`, `Carlos`, `Paulo`, `Bia`, `Vivian`, `Isabela`, `Vinivius`, `Renan`, `Renata`, `Daisy`, `Camilo`]

const sala1 = nomes.slice(0, nomes.length / 2)
const sala2 = nomes.slice(nomes.length / 2)

console.log(nomes.length)

console.log(`Alunos da Sala1: ${sala1}`)
console.log(sala1.length)

console.log(`Alunos da Sala2: ${sala2}`)
console.log(sala2.length)