const avanca = document.querySelectorAll(".btn_prox")
avanca.forEach(button => {
    button.addEventListener( "click", function(){
        const atual = document.querySelectorAll(".ativo");
        const proximopasso = "passo-" + this.getAttribute("data-proximo")

        atual.ClassList.remove("ativo");
        document.getElementById(proximopasso).ClassList.add("ativo");
    })
})