const resultado = window.document.querySelector(".resultado");
const botoes = window.document.querySelectorAll(".botao");

for (let index = 0; index < botoes.length; index++) {

    botoes[index].addEventListener('click', (e) => {
        
        let dados = e.target.getAttribute("data");

        // Se o evento foi disparado no elemento <i>, suba para o elemento pai (o botão)
        if (!dados && e.target.parentNode) {
            dados = e.target.parentNode.getAttribute("data");
        }

        switch (dados) {

            case "C":
                resultado.innerText = "";
                break;

            case "=":
                try {
                    // Substituir o operador '%' para '/100' para o cálculo correto
                    let expressao = resultado.innerText.replace(/%/g, '/100');
                    resultado.innerText = eval(expressao);
                } catch (error) {
                    resultado.innerText = "Erro";
                }
                break;

            case "back":
                if (resultado.innerText) {
                    resultado.innerText = resultado.innerText.slice(0, -1);
                }
                break;

            case "+/-":
                resultado.innerText = resultado.innerText ? String(-parseFloat(resultado.innerText)) : '';
                break;

            case "%":
                if (resultado.innerText) {
                    resultado.innerText += '%';
                }
                break;

            default:
                resultado.innerText = resultado.innerText + dados;
                break;
        }

    });

}
