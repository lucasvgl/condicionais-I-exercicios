
// # Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou 
//ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;
// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

let idade = 30
let terminouEnsinoMedio = true
let isCursandoOutraFaculdade = false

function maioridade(idade){
if (idade > 18){
    console.log("Você é maior de idade")
}
if(terminouEnsinoMedio){
    console.log("Você terminou o Ensino Médio")
}else{
    console.log("Você não terminou o Ensino Médio")	
}

if(!isCursandoOutraFaculdade){
    console.log("Você não está cursando nenhum faculdade")
}else{
    console.log("Você está cursando uma faculdade")	
}
}

maioridade(idade,terminouEnsinoMedio,isCursandoOutraFaculdade)

