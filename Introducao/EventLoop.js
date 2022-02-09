function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
	  currentDate = Date.now();
	} while (currentDate - date < milliseconds);
  }
  

function primeiroBloco(){
	// Aguardar 5 segundos
    setTimeout( function(){
        sleep(5000)
        console.log('Esse é o primeiro bloco de comandos após 5 segundos');
    }, 1000 );
    
}
function segundoBloco(){
	console.log('Esse é o segundo bloco de comandos');
}
primeiroBloco();
segundoBloco();