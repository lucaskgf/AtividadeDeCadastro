var TotalDePessoas = 0;
var alturaFeminina = 0;
var alturaMasculina = 0;
var pessoasF = 0;
var pessoasM = 0;
var quantidadeDeAlturas = [];

while(TotalDePessoas < 15) {        //total pessoas < 15 junto com while cria uma repeticao nessa quantidade de pessoas.//

	var sexo = prompt("Digite o SEXO da pessoa " + (TotalDePessoas + 1)); //quando tem a escolha do sexo a pessoa é mostrada(se é a primeira, segunda, terceira e etc...)
	var altura = parseFloat(prompt("Digite a ALTURA da Pessoa " + (TotalDePessoas + 1))); //quando tem a escolha da altura a pessoa é mostrada(se é a primeira, segunda, terceira e etc...)


	if(sexo == "F" || sexo == "f") { //barra barra serve para dizer um tanto faz se for maiusculo ou minusculo KKKK, resumindo pode ser desse ou daquele jeito//

		quantidadeDeAlturas.push(altura);   //a lista de alturas vai puxar a altura que foi colocada//
		alturaFeminina = alturaFeminina + altura; //a altura feminina vai puxar se escolher F e vai adicionar em altura.//
		console.log(alturaFeminina);
		pessoasF++;     //aqui sera adicionado a pessoa em "pessoasF"//
		console.log(pessoasF);
		
	} else {

		if(sexo == "M" || sexo == "m") {		//mesma coisa de cima, TODOS//

			quantidadeDeAlturas.push(altura); //mesma coisa de cima, TODOS//
			alturaMasculina = alturaMasculina + altura;		//mesma coisa de cima, TODOS//
			console.log(alturaMasculina);
			pessoasM++;				//mesma coisa de cima, TODOS//
			console.log(pessoasM);
			
		}
	}
	TotalDePessoas++; //adicionar as pessoas ao total
}

//tofixed(3) fixar ate certa quantidade de numeros. // 
var mediaAlturaM = parseFloat((alturaMasculina / pessoasM).toFixed(2)); //alturaMasculina divido pelas pessoasM equivale a media.//


//document.write serve para o conteudo aparecer no html.//

document.write("Altura MÉDIA dos HOMENS: " + mediaAlturaM +  "<br><br>");

document.write("Quantidade de MULHERES: " + pessoasF + "<br><br>");

var maiorAltura = Math.max.apply(null, quantidadeDeAlturas).toFixed(2); //variavel para maior altura. usei math puxando a lista de quantidade de alturas (os dados foram armazenados la) sendo assim o "math" ira puxar a maior altura.//

document.write("A MAIOR altura é: " + maiorAltura + " metros" + "<br><br>");

var menorAltura = Math.min.apply(null, quantidadeDeAlturas).toFixed(2); //mesma coisa que a maior altura.//

document.write("A MENOR altura é: " + menorAltura + " metros" + "<br><br>");