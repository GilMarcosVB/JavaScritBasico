document.getElementById("validarButton").
        addEventListener("click", function () {
                //  alert("Deu Certo!!!");

                const cpf = document.getElementById("cpfinput").value;

                if (validaCPF(cpf)) {
                        document.getElementById("resultado").textContent = "CPF Válido"
                } else {
                        document.getElementById("resultado").textContent = "CPF Inválido"
                }

        })



function validaCPF(vrCFP){
        return vrCFP.length === 11 & !isNaN(vrCFP);
}