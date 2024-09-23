const avanca = document.queryselectorAll('.btn-proximo');

avanca.forEach(button =>{
    button.addEventlistener('click', function(){
        const atual = document.queryselector('.ativo');
        const ProximoPasso ='passo-' + this.getAtribute('data-Proximo');

        atual.classList.remove('ativo');
        document.getElementById(ProximoPasso).classList.add('ativo');
    })
})
