const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no início da sua carreira em Administração e se depara com uma nova ferramenta de gestão de projetos. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso pode otimizar bastante nosso fluxo de trabalho!",
                afirmacao: "afirmação"
            },
            {
                texto: "Estou cético quanto a eficácia dessa nova ferramenta.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Sua empresa decidiu adotar uma nova estratégia de marketing digital. Qual é a sua abordagem para contribuir com a implementação?",
        alternativas: [
            {
                texto: "Utiliza a análise de dados para ajudar a formular uma estratégia baseada em insights detalhados.",
                afirmacao: "afirmação"
            },
            {
                texto: "Contribui com ideias baseadas na experiência e conhecimento do mercado.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está participando de uma reunião sobre as tendências futuras em administração. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a automação e a análise de dados serão essenciais para o futuro da administração.",
                afirmacao: "afirmação"
            },
            {
                texto: "Preocupo-me com o impacto da automação nas oportunidades de emprego e a necessidade de capacitação contínua.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a reunião, você precisa criar uma apresentação sobre o impacto das novas tecnologias na administração. Como você procede?",
        alternativas: [
            {
                texto: "Utiliza um software de apresentação para criar slides detalhados com gráficos e dados.",
                afirmacao: "afirmação"
            },
            {
                texto: "Desenvolve a apresentação com a ajuda de um gerador de conteúdo baseado em IA para otimizar o tempo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo para desenvolver um plano de negócios. Um colega usou uma ferramenta de IA para criar o plano. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Acredito que usar ferramentas de IA pode ser útil, mas é importante revisar e adicionar a perspectiva da equipe.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não vejo problema em usar o plano gerado pela IA, desde que o trabalho esteja completo e seja relevante.",
                afirmacao: "afirmação"
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Sua jornada na administração está apenas começando...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
