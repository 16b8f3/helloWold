var imgAlice = document.querySelector(".alice");
var divHelloWorld = document.querySelector(".helloWorld");
var divBalao = document.querySelector(".balao");
var divBalao2 = document.querySelector(".balao2");
var numeroSorteado = sorteadoNumero();
var numeroSorteadoParaFala = sorteadoNumeroParaFala();
const titulo = document.querySelector('.o_titulo');
var falaEsquerdaAlice = document.querySelector(".falaDeAlice");

function sorteadoNumero() {
  return Math.floor(Math.random() * 1001);
}

function sorteadoNumeroParaFala() {
  return Math.floor(Math.random() * 5);
}

function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) => {
		setTimeout(function() {
			elemento.innerHTML += letra;
		}, 75 * i);
	})
}

console.log('O numero sorteado foi: ' + numeroSorteado);

if(numeroSorteado == 1000){
	imgAlice.addEventListener("mouseover", function() {
		divHelloWorld.style.display = 'none';
		divBalao2.style.display = 'block';
	})

	imgAlice.addEventListener("mouseout", function() {
		divHelloWorld.style.display = 'block';
		divBalao2.style.display = 'none';
	})
}else{
	console.log('Quando o numero sorteado for 1000 você vai ter uma surpresa');

	sorteadoNumeroParaFala();

	if(numeroSorteadoParaFala == 2){
		falaEsquerdaAlice.innerHTML = 'I want an <i>elegant apron</i>';
	}
	if(numeroSorteadoParaFala == 3){
		falaEsquerdaAlice.innerHTML = 'エレガントなエプロンが欲しい';
	}


	imgAlice.addEventListener("mouseover", function() {
		divHelloWorld.style.display = 'none';
		divBalao.style.display = 'block';
	})

	imgAlice.addEventListener("mouseout", function() {
		divHelloWorld.style.display = 'block';
		divBalao.style.display = 'none';
	})
}

typeWriter(titulo);