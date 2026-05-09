
//funcao p/ converter em valor com formatacao "," "."
function converter(valor) {
    return Number(valor.replace(",", "."));
}

//funcao calcular media
function calcularMedia() {

    // criando array
    const notas = [];

    // fazendo input das notas
    // notas.push(Number(document.getElementById("nota1").value));
    // notas.push(Number(document.getElementById("nota2").value));
    // notas.push(Number(document.getElementById("nota3").value));

    // fazendo input das notas (substituiu o de cima, por conta da formatação "," ".")
    // usa a função criada no inicicio para transformar o input em numero
    notas.push(converter(document.getElementById("nota1").value));
    notas.push(converter(document.getElementById("nota2").value));
    notas.push(converter(document.getElementById("nota3").value));

    // realizando calculos
    const peso1 = 2
    const peso2 = 3
    const peso3 = 5
    const nota1 = notas[0] * peso1
    const nota2 = notas[1] * peso2
    const nota3 = notas[2] * peso3
    const media = (nota1 + nota2 + nota3)/(peso1 + peso2 + peso3)
    const corMedia = media >= 7 ? "green" : "red";


    // capturando a div e printando nela 
    const resultado = document.getElementById("resultado")

    resultado.innerHTML = `
            <ul>
                <li>
                    <p>Nota 1 ponderada: </p> ${nota1.toFixed(2)}
                </li>
                <li>
                    <p>Nota 2 ponderada: </p> ${nota2.toFixed(2)}
                </li>
                <li>
                    <p>Nota 3 ponderada: </p> ${nota3.toFixed(2)}
                </li>
            </ul>
            <ul>
                <li>
                    <h2>Sua media final é: 
                        <span style="color:${corMedia}"> 
                            ${media.toFixed(2)}
                        </span>
                    </h2>
                </li>
            </ul>
            <div class="botao">
                 <button onclick="limparTela()">Limpar</button>
            </div>
`
}

//inputs com enter
const inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {
    input.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            const proximoInput = inputs[index + 1];

            if (proximoInput) {
                proximoInput.focus();
            } else {
                calcularMedia();
            }
        }
    });
});

//funcao mascara de entrada
//function aplicarMascaraNota(input) {
//    let valor = input.value;
//
//    // remove tudo que não for número
//    valor = valor.replace(/\D/g, "");
//
//    // limita a 4 dígitos (nnnn)
//    valor = valor.substring(0, 4);
//
//    // aplica vírgula (nn,nn)
//    if (valor.length > 2) {
//        valor = valor.replace(/(\d{2})(\d+)/, "$1,$2");
//    }
//
//    input.value = valor;
//}

// segunda funcao de mascara
function aplicarMascaraNota(input) {
    let valor = input.value;

    // permite apenas números e vírgula
    valor = valor.replace(/[^0-9,]/g, "");

    // impede mais de uma vírgula
    const partes = valor.split(",");
    if (partes.length > 2) {
        valor = partes[0] + "," + partes[1];
    }

    // limita casas decimais a 2
    if (valor.includes(",")) {
        let [inteiro, decimal] = valor.split(",");
        decimal = decimal.substring(0, 2);
        valor = inteiro + "," + decimal;
    }

    // limita parte inteira (0–10)
    let numero = Number(valor.replace(",", "."));

    if (!isNaN(numero) && numero > 10) {
        valor = "";
    }

    input.value = valor;
}

// aplica a máscara em todos os inputs
inputs.forEach((input) => {
    input.addEventListener("input", function() {
        aplicarMascaraNota(this);
    });
});

function limparTela() {
    // limpa inputs
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    // limpa resultado
    document.getElementById("resultado").innerHTML = "";

    // volta o foco pro primeiro campo
    document.getElementById("nota1").focus();
}