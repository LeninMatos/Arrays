 // Constante que guardo o nome dos alunos
const alunos = ['João', 'Juliana', 'Caio', 'Ana']
// Constnte que guarda a média dos alunos
const mediaDosAlunos = [10, 7, 9, 6] 
//Guarda a lista de alunos com suas médias
let listaDeNotasEAlunos = [alunos, mediaDosAlunos] 

// Função que irá exibir a média do aluno, atrávés do parametro do nome do aluno e também verifica se esse aluno está na lista.
const exibeNomeNota = (nomeDoAluno) => {                                // Declara a função e deixa como parametro o nome do aluno a ser procurado
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {                 // Se dentro da listaDeNotasEAlunos, o nomeDoAluno está na lista de alunos, que está no index [0]  
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)       // Sendo encontrado o nomeDoAluno na lista de alunos, então é guardado o valor do index no variável "indice"
        return listaDeNotasEAlunos[0][indice] + ', sua nota é ' + listaDeNotasEAlunos[1][indice]   // Retorna a frase do nome do aluno e sua média      
    } else {   
        return "Aluno não está cadastrado" // Se o aluno não está na lista, não é executdo o return acima
    }
}

function exibeNomeNota2(nomeDoAluno) {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // Se dentro da listaDeNotasEAlunos, o nomeDoAluno está na lista de alunos, que está no index [0]  
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // Sendo encontrado o nomeDoAluno na lista de alunos, então é guardado o valor do index no variável "indice"
        return listaDeNotasEAlunos[0][indice] + ', sua nota é ' + listaDeNotasEAlunos[1][indice] // Retorna a frase do nome do aluno e sua média      
    }
    return "Aluno não está cadastrado" // Se o aluno não está na lista, não é executdo o return acima
}

console.log(exibeNomeNota("Caio"))
console.log(exibeNomeNota2("Ana"))
console.log(exibeNomeNota("Paulo"))
console.log(exibeNomeNota2("Paulo"))

