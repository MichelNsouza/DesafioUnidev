    function numeroaleatorio(){
        return Math.floor(Math.random() * 999);
    }
    var txtaleatorio = numeroaleatorio();
    var txtaleatorio
    function letraaleatoria(){
        return Math.floor(Math.random()).charAt();
    }
    
/*  teste de gerar letra aleatoria      falha
    function letra(length) {
    var resultado = ''; 
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var qtdletras = characters.length;
    for ( var i = 0; i < length; i++ ) {
      resultado += letras.charAt(Math.floor(Math.random() * 
 qtdletras));
   }
   return resultado;
}
   var txtletraaleatoria = letras();
*/
    function openbox(){
        var respostacodigo = document.getElementById("rescodigo");       
        if(respostacodigo.style.display === "block") {
            respostacodigo.style.display = "none";
        } else {
            respostacodigo.style.display = "block";
            document.getElementById("all").textContent= "#"+ txtaleatorio + "LL";
        }
    }
    
    
    /* teste de surgir div          funcionou melhor, dps não ksksksks
        var button = document.documentElement ????????????? ("corpo");
        button.addEventListener("click", function(){
            var respostacodigo = document.getElementById("rescodigo");
            if(respostacodigo.style.display === "block") {
                respostacodigo.style.display = "none"
            } else {
                respostacodigo.style.display = "block";
            }
        });
    */
