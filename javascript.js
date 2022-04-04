function openbox(){
    var respostacodigo = document.getElementById("rescodigo");
    if(respostacodigo.style.display === "block") {
        respostacodigo.style.display = "none"
    } else {
        respostacodigo.style.display = "block";
    }
}

/* teste
<script>
    var button = document.documentElement ??? ("corpo");
    button.addEventListener("click", function(){
        var respostacodigo = document.getElementById("rescodigo");
        if(respostacodigo.style.display === "block") {
            respostacodigo.style.display = "none"
        } else {
            respostacodigo.style.display = "block";
        }
    });
</script>
*/