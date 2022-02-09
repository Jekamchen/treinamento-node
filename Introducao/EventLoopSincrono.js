sleep(5000)
console.log('Esse é o primeiro bloco de comandos após 5 segundos');
console.log('Esse é o segundo bloco de comandos');


function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
	  currentDate = Date.now();
	} while (currentDate - date < milliseconds);
  }
  