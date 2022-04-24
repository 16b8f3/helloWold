var imgAlice = document.querySelector(".alice");
var divHelloWorld = document.querySelector(".helloWorld");
var divBalao = document.querySelector(".balao");
var divBalao2 = document.querySelector(".balao2");
var numeroSorteado = sorteadoNumero();

function sorteadoNumero() {
  return Math.floor(Math.random() * 1001);
}

console.log('O numero sorteado foi: ' + sorteadoNumero());

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

	imgAlice.addEventListener("mouseover", function() {
		divHelloWorld.style.display = 'none';
		divBalao.style.display = 'block';
	})

	imgAlice.addEventListener("mouseout", function() {
		divHelloWorld.style.display = 'block';
		divBalao.style.display = 'none';
	})
}
