const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-button');

let storyStage = 0;

const stages = [
    { text: "Você é Paul Atreides, e chegou em Arrakis, o planeta desértico. Sua missão é garantir o controle do planeta e enfrentar os desafios que surgem.", choices: [ { text: "Explorar o deserto", nextStage: 1 }, { text: "Reunir-se com seus aliados", nextStage: 2 } ] },
    { text: "Você explora o deserto e encontra uma tribo dos Fremen. Eles são amigáveis e oferecem ajuda. Você decide...", choices: [ { text: "Aceitar a ajuda e aprender sobre as areias de Arrakis", nextStage: 3 }, { text: "Recusar a ajuda e continuar sozinho", nextStage: 4 } ] },
    { text: "Você se reúne com seus aliados e começa a planejar a estratégia para enfrentar a Casa Harkonnen. Você decide...", choices: [ { text: "Atacar imediatamente", nextStage: 5 }, { text: "Esperar e reunir mais informações", nextStage: 6 } ] },
    { text: "Os Fremen te ensinam sobre o deserto e as armadilhas das areias. Com esse conhecimento, você está melhor preparado. Você decide...", choices: [ { text: "Voltar para o palácio e preparar um ataque", nextStage: 5 }, { text: "Continuar explorando e aprendendo mais", nextStage: 4 } ] },
    { text: "Você continua sozinho e encontra várias dificuldades. Sem ajuda, a situação se torna cada vez mais complicada. Você...", choices: [ { text: "Tentar um novo plano", nextStage: 6 }, { text: "Desistir e procurar um refúgio", nextStage: 7 } ] },
    { text: "Você decide atacar imediatamente e a batalha é feroz. Dependendo das suas estratégias, você pode...", choices: [ { text: "Buscar uma vitória rápida", nextStage: 8 }, { text: "Tentar um ataque mais calculado", nextStage: 9 } ] },
    { text: "Você decide esperar e reunir mais informações. Com o tempo, você descobre um plano para derrotar a Casa Harkonnen. Você...", choices: [ { text: "Colocar o plano em ação", nextStage: 8 }, { text: "Continuar observando e coletando mais dados", nextStage: 9 } ] },
    { text: "Você encontra um refúgio e começa a planejar uma nova abordagem. Sua história está longe de acabar.", choices: [] },
    { text: "A batalha foi difícil e o resultado não foi favorável. Mas sua jornada está longe de terminar.", choices: [] },
    { text: "Você consegue uma vitória significativa contra a Casa Harkonnen. Arrakis começa a mudar sob sua liderança.", choices: [] },
    { text: "Sua abordagem calculada garante uma vitória decisiva e a paz em Arrakis é restaurada.", choices: [] }
];

function displayStage() {
    const stage = stages[storyStage];
    storyElement.innerText = stage.text;
    choicesElement.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            storyStage = choice.nextStage;
            if (storyStage < stages.length) {
                displayStage();
            } else {
                storyElement.innerText = 'Fim da história!';
                choicesElement.innerHTML = '';
                nextButton.style.display = 'none';
            }
        });
        choicesElement.appendChild(button);
    });
}

nextButton.addEventListener('click', displayStage);
displayStage();
