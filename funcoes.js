function numeroaleatorio(){
    return Math.floor(Math.random() * 999);
    }
function letra1(){
    var resultado = ''; 
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        resultado += letras.charAt(Math.floor(Math.random()*26 ));
        return resultado;
}
function letra2(){
    var resultado = ''; 
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        resultado += letras.charAt(Math.floor(Math.random()*26 ));
        return resultado;
}
function abrebox(){
    var base = document.getElementById("container1");   
    var respostacodigo = document.getElementById("rescodigo"); 
    var nomedoburg = document.querySelectorAll('.p1');                /* não chama o nome do burg*/
    if(respostacodigo.style.display === "block") {
        respostacodigo.style.display = "none";
        base.style.height = "1130px";
    }else {
        respostacodigo.style.display = "block";
        document.getElementById("numeroale").textContent = "#" +  numeroaleatorio() + letra1() + letra2();
        document.getElementById("nomeburg").textContent = nomedoburg;   /* tentar chamar o nome do burg da <p> com class p1*/
        base.style.height = "1450px";
    }
    }