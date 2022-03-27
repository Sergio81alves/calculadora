function calcular(tipo, valor){
 if(tipo === 'acao'){
     if(valor === 'c'){
         //limpar o visor (idresultado)
         document.getElementById('resultado').value = ''
     }

     if( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor
     }

     if(valor === '='){
        var campo =eval(document.getElementById('resultado').value)
       document.getElementById('resultado').value = campo
     }

 }else if(tipo === 'valor') {
    var d = document.getElementById('resultado').value += valor
    
 }
}
function back(){
   var resultado = document.getElementById('resultado').value;
   document.getElementById('resultado').value = resultado.substring(0, resultado.length -1);
}
/*1 c I II III
2 A interação
3b 
4C
5B(1a, 2c, 3d, 4b

   av2
 1a
 2d 
 3c
 4c
 5a  
   )*/
 