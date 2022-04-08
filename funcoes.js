// cria numero aleatorio
        function numeroaleatorio(){
    return Math.floor(Math.random() * 999);
    }
// cria uma letra aleatoria
function letra1(){
    var resultado = '';
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        resultado += letras.charAt(Math.floor(Math.random()*26 ));
        return resultado;
}
// Procurar como usar duas letras com uma função
function letra2(){
    var resultado = '';
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        resultado += letras.charAt(Math.floor(Math.random()*26 ));
        return resultado;
}
// ação ao clicar no corpo de um burg
function abrebox(){
 
    var base = document.getElementById("container1");  
    var respostacodigo = document.getElementById("rescodigo");
    var nomedoburg = document.querySelectorAll('.p1');          //não funciona o chama nome do burg
    var ficahover = document.querySelectorAll('.corpo');        //procurar como usar o query corretamente
    if(respostacodigo.style.display === "block") {
        respostacodigo.style.display = "none";
        base.style.height = "1130px";
    }else {
        respostacodigo.style.display = "block";
        document.getElementById("numeroale").textContent = "#" +  numeroaleatorio() + letra1() + letra2();
        document.getElementById("nomeburg").textContent = nomedoburg;   // tentar chamar o nome do burg da <p> com class p1
        base.style.height = "1450px";                                   // espande o corpo principal, procurar como fazer pelo CSS
        ficahover.style.backgroundColor = "red"                         //rever query
    }
    }
