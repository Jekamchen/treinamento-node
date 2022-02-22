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
        console.log('Esse é o primeiro bloco de comandos após 5 segundos');
    }, 5000 );
    
}
function segundoBloco(){
	console.log('Esse é o segundo bloco de comandos');
}

function terceiroBloco(){
	setTimeout( function(){
        console.log('Esse é o terceiro bloco')
    }, 2000);
}
primeiroBloco();
segundoBloco();
terceiroBloco();