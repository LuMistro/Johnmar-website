
 $('#enviarmensagem').click(function () {

 // Acrescenta o texto diretamente no elemento body do HTML
 $('body').text('Seu formulario foi recebido, aguarde que entraremos em contato, Você será redirecionado para a pagina inicial em 3 segundos');

 //setTimeout com 3000 milisegundos (3 segundos)
 setTimeout(function () {

 //Executa o redirecionamento
 window.location.href = 'index.html';

 }, 3000)
 })