//NIVEL BASICO


//1 Crie uma variável nome (string) e uma variável idade (number). Imprima ambas usando console.log .
let nome = "Joilson Guimarçaes"
let idade =34

console.log(`Meu nome é ${nome} e tenho ${idade} anos`)



//2 Declare três variáveis numéricas: a , b e c . Calcule e imprima a soma dos três valores.
let a = 2
let b = 3
let c = 5

console.log(a+b+c)



//3 - Crie uma variável precoProduto e uma variável quantidade . Calcule o valor total da compra ( precoProduto * quantidade ).
let PrecoProduto = 6.59
let quantidade = 10

console.log(PrecoProduto * quantidade)



//4 Declare uma variável temperaturaCelsius e converta para Fahrenheit usando a fórmula (C * 9/5) + 32 .
let temperaturaCelsius = 40
console.log((temperaturaCelsius*9/7)+32)




//5 - Use typeof para imprimir o tipo de 4 variáveis diferentes (uma string, um number, um boolean e uma variável não inicializada).

let nome = "nome"
let numero = 10
let vOuF = true
let nulo = null

console.log(typeof nome, typeof numero, typeof vOuF, typeof nulo)




// NIVEL INTERMEDIARIO

// 1 - Dado um número armazenado em uma variável, use o operador % (módulo) para verificar se 
// ele é par ou ímpar, e imprima o resultado com um template string.

let numero = 15

if(numero % 2 ==0){
    console.log(" o numer é par")
}else{
    console.log("o numero é impar")
}


//2 - Crie duas variáveis booleanas, chovendo e temGuardaChuva . Use o operador && para determinar 
// se a pessoa vai se molhar, e o operador ! para negar um dos valores.
let chovendo = true;
let temGuardaChuva = false;

let vaiSeMolhar = chovendo && !semGuardaChuva;

console.log(vaiSeMolhar);



//3 Compare dois números usando os operadores > , < , >= , <= e imprima o resultado de cada comparação.

let v1 = 10
let v2 = 20

let menorQue = v1<v2
let maiorQue = v1>v2
let menorOuIgual = v1<=v2
let maiorOuIgual = v1>=v2

console.log(`O v1 é menor que v2? ${menorQue}`)
console.log(`O v1 é maior que v2?${maiorQue}`)
console.log(`O v1 é menor ou igual a v2?${menorOuIgual}`)
console.log(`O v1 é maior ou igual a v2?${maiorOuIgual}`)


///4 - Explique com um exemplo prático a diferença entre == e === em JavaScript (crie um 
// caso onde os resultados são diferentes).

let numero1 = 10
let numero2 = "10"

console.log(numero1 == numero2) //vai retornar True pois ele vai comparar os caracteres mesmo sendo em tipos de variaveis diferente.
console.log(numero1 === numero2) // vai retornar false pois nesse casso dos === ele compara tbm se é do mesmo tipo de variavel


//5 - Use o operador ternário ( condição ? valorSeVerdadeiro : valorSeFalso ) para verificar
//  se uma pessoa é maior de idade a partir de uma variável idade

const idade = 18
const resultado = idade>=18 ? "Maior de idade" : "Menor de idade"

console.log(resultado)



// 6 - Crie uma variável salario e aplique um aumento de 15% usando operadores aritméticos e de atribuição composta ( += , *= )


let salario = 4000

salario *=1.15
console.log(salario)



//NIVEL AVANÇADO 

//1 -Crie três variáveis representando as notas de um aluno. Calcule a média e use operadores de 
// comparação para determinar se ele foi aprovado (média ≥ 6), em recuperação (média entre 4 e 5.9) 
// ou reprovado (média < 4) — apenas com operadores, sem if .


let nota1 = 7
let nota2 = 5
let nota3 = 3

let media  = (nota1+nota2+nota3)/3 

const resultado = media >=6 ? "Aprovado" : media>=4 ? "em recuperação" : "reprovado"

console.log(media)
console.log(resultado)




//2 Dado o valor de um carrinho de compras ( valorCarrinho ) e um cupom de desconto ( desconto , em
// porcentagem), calcule o valor final da compra em uma única expressão.


let valorCarrinho = 2000
let desconto = 20

const valorPagar = valorCarrinho *(1-desconto/100)

console.log(valorPagar)


//3 - Usando apenas operadores lógicos ( && , || , ! ) e sem estruturas condicionais, crie uma variável 
// podeVotar que seja true somente se a pessoa tiver 16 anos ou mais e for cidadã do país.
let idade = 16
let eCidadao = true
const podeVotar = ((idade >= 16) && eCidadao)

console.log(podeVotar)


// 4 - Crie uma variável numero e, usando operadores bit a bit ( & ), verifique se ele é par (dica: numero & 1 ).

let numero = 10
if((numero & 1)===0){
    console.log("numero é par")
}else{
    console.log("numero é impar")
}