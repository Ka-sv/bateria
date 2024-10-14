/*parametro usado no function dentro das chaves que é uma variavel,
funcao esta recebendo ID de um elemento' de audio que vai ser buscado pelo queryselector
e reproduzir som atraves da funcao play*/
function TocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento != null && elemento.localName === 'audio' ) {
      
      elemento.play();   

   }

   else {

    alert ('Elemento Não encontrado');

   }
}

/*querySelector abaixo está criando lista com todos os elementos que possui a class tecla*/
document.querySelectorAll('.tecla');

/*const abaixo criada com nome listaDeTeclas está buscando a lista criada acima e dando nome para esta
*/
const ListaDeTeclas = document.querySelectorAll('.tecla');

/* linha 19 temos exemplo de como acessar um item por vez da lista que criamos na linha 11 e 
usar funcao onclick juntamente com funcao tocaSom*/
//*ListaDeTeclas[0].onclick = TocaSom;*/ 

/*contador inicia em 0 e busca o indice em length, para determinar ate onde vai essa lista, contador
esta armazenando o indice*/

let contador = 0;

/*Enquanto*/
// while (contador < ListaDeTeclas.length){

for (let contador = 0; contador < ListaDeTeclas.length; contador ++ ){
/* const tecla, armazenana lista de teclas e utiliza contador para determinar ate onde vai essa
 lista */
   const tecla = ListaDeTeclas[contador];

   /*const instrumento é a lista de tecla buscando diretamente o instrumento pelo som*/

   const  instrumento = tecla.classList[1];

   /*template string*/
   const idAudio = `#som_${instrumento}`;
   
   //console.log (idAudio);

    tecla.onclick = function() {
        
        TocaSom(idAudio);

    }
    /* abaixo adc a class ativa quando o teclado estiver sendo preciosando*/
 tecla.onkeydown = function(evento) {

    console.log(evento.code=== 'Space')

      if (evento.code === 'Space'|| evento.code === 'Enter') {
    
        tecla.classList.add('ativa');

}   

 }
  /*codigo abaixo diz, quando o usuario soltar a tecla deve remover a class ativa*/
 tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
 }
    //contador = contador + 1 ;

    //console.log(contador);
}
