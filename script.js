const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está participando de uma reunião de equipe e o gerente menciona a implementação de um novo sistema de gestão que promete melhorar a eficiência dos processos administrativos. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso pode ser um desafio para adaptar-se às novas ferramentas!",
                afirmacao: "Desafio"
            },
            {
                texto: "Isso é uma excelente oportunidade para otimizar os processos!",
                afirmacao: "Oportunidade"
            }
        ]
    },
    {
        enunciado: "Após a reunião, o gerente pede que você elabore um relatório sobre os possíveis impactos do novo sistema na gestão de projetos. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de pesquisa para encontrar informações sobre o sistema e como ele pode impactar a gestão de projetos.",
                afirmacao: "Pesquisa"
            },
            {
                texto: "Elabora o relatório com base em informações obtidas através de discussões com a equipe e seu próprio conhecimento sobre gestão de projetos.",
                afirmacao: "Conhecimento"
            }
        ]
    },
    {
        enunciado: "Durante a apresentação do relatório, você e sua equipe discutem como o novo sistema pode transformar o papel dos gestores e melhorar a tomada de decisões. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que o sistema pode fornecer dados valiosos que ajudarão na tomada de decisões mais informadas.",
                afirmacao: "Dados Valiosos"
            },
            {
                texto: "Preocupa-se com a possibilidade de o sistema reduzir a importância das decisões humanas e diminuir o papel estratégico dos gestores.",
                afirmacao: "Preocupação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar uma apresentação para mostrar como o novo sistema pode ser integrado ao fluxo de trabalho atual. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Cria a apresentação usando uma ferramenta de design, como PowerPoint ou Google Slides.",
                afirmacao: "Design"
            },
            {
                texto: "Utiliza um gerador de apresentações baseado em IA para criar slides e infográficos rapidamente.",
                afirmacao: "IA"
            }
        ]
    },
    {
        enunciado: "Você está coordenando um projeto e percebe que uma das análises financeiras foi gerada por uma ferramenta de IA. O que você faz?",
        alternativas: [
            {
                texto: "Aceita a análise gerada pela IA sem questionar, pois a tecnologia pode ser muito precisa.",
                afirmacao: "Aceitação"
            },
            {
                texto: "Revisa a análise e adiciona suas próprias observações e interpretações para garantir a precisão e relevância da informação.",
                afirmacao: "Revisão"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
