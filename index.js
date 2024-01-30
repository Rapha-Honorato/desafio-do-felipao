//Criando variável do nome do herói
let nomeDoHeroi = "Herói de Azeroth"

//Criando a variável do nível, aqui realizei uma pesquisa de métodos que eu poderia utilizar para gerar um número aleatório,
//para que sempre que executado o código de um valor diferente
var expAleatoria = Math.floor(Math.random() * 11000) + 1;

console.log("");
//Criando uma mensagem inicial
console.log("Seja bem vindo! " + nomeDoHeroi + "\n");
//Mostrando quantos pontos de experiência possuí
console.log("Valor de experiência: " + expAleatoria +"\n");

//Criando a hierarquia dos níveis
let nivel;

if (expAleatoria >= 1 && expAleatoria <= 1000) {
    nivel = "Ferro";
    console.log("O " + nomeDoHeroi + " está no nível Ferro."+"\n");
} else if (expAleatoria > 1000 && expAleatoria <= 2000) {
    nivel = "Bronze";
    console.log("O " + nomeDoHeroi + " está no nível Bronze."+"\n");
} else if (expAleatoria > 2000 && expAleatoria <= 3000) {
    nivel = "Prata";
    console.log("O " + nomeDoHeroi + " está no nível Prata."+"\n");
} else if (expAleatoria > 3000 && expAleatoria <= 4000) {
    nivel = "Ouro";
    console.log("O " + nomeDoHeroi + " está no nível Ouro."+"\n");
} else if (expAleatoria > 4000 && expAleatoria <= 5000) {
    nivel = "Platina";
    console.log("O " + nomeDoHeroi + " está no nível Platina."+"\n");
} else if (expAleatoria > 5000 && expAleatoria <= 6000) {
    nivel = "Ascendente";
    console.log("O " + nomeDoHeroi + " está no nível Ascendente."+"\n");
} else if (expAleatoria > 6000 && expAleatoria <= 7000) {
    nivel = "Imortal";
    console.log("O " + nomeDoHeroi + " está no nível Imortal."+"\n");
} else if (expAleatoria > 7000 && expAleatoria <= 8000) {
    nivel = "Radiante";
    console.log("O " + nomeDoHeroi + " está no nível Radiante"+"\n");
} else {
    nivel = "Desconhecido";
    console.log("O " + nomeDoHeroi + " está em um nível desconhecido." +"\n");
}

console.log("Você " + nomeDoHeroi + " que está no nível " + nivel + " ... You are not prepared!!!" + "\n");


