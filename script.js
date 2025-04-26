document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality for practice items
    const modal = document.getElementById('practice-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');
    const learnMoreBtns = document.querySelectorAll('.learn-more');

    // Practice information
    const practiceInfo = {
        reducao: {
            title: "Redução do Consumo",
            content: `
                <p>A redução do consumo é o primeiro e mais importante passo para a sustentabilidade. Significa comprar e usar menos produtos, evitando o desperdício e a geração excessiva de resíduos.</p>
                <h4>Como praticar:</h4>
                <ul>
                    <li>Faça uma lista antes de comprar e siga-a rigorosamente</li>
                    <li>Questione-se se realmente precisa de um novo item antes de adquiri-lo</li>
                    <li>Opte por produtos duráveis e de qualidade que tenham vida útil mais longa</li>
                    <li>Planeje refeições para evitar desperdício de alimentos</li>
                    <li>Consuma conteúdo digital em vez de impresso sempre que possível</li>
                </ul>
                <p>Ao reduzir o consumo, você diminui a demanda por recursos naturais e a pressão sobre o meio ambiente, além de economizar dinheiro.</p>
            `
        },
        reutilizacao: {
            title: "Reutilização",
            content: `
                <p>A reutilização consiste em dar novos usos a produtos e materiais antes de descartá-los, estendendo sua vida útil e reduzindo a necessidade de produzir novos itens.</p>
                <h4>Como praticar:</h4>
                <ul>
                    <li>Transforme potes de vidro em recipientes para armazenamento</li>
                    <li>Use o verso de papéis impressos para anotações</li>
                    <li>Transforme roupas antigas em panos de limpeza</li>
                    <li>Doe itens que não usa mais em vez de descartá-los</li>
                    <li>Repare eletrodomésticos e eletrônicos em vez de substituí-los</li>
                    <li>Participe de feiras de trocas ou utilize plataformas de segunda mão</li>
                </ul>
                <p>A reutilização ajuda a economizar recursos e energia que seriam usados na produção de novos itens, além de reduzir a quantidade de resíduos em aterros.</p>
            `
        },
        reciclagem: {
            title: "Reciclagem",
            content: `
                <p>A reciclagem é o processo de transformar materiais usados em novos produtos, evitando o desperdício de matérias-primas potencialmente úteis e reduzindo o consumo de recursos naturais.</p>
                <h4>Como praticar:</h4>
                <ul>
                    <li>Separe corretamente os resíduos recicláveis (papel, plástico, vidro, metal)</li>
                    <li>Lave as embalagens antes de destiná-las à reciclagem</li>
                    <li>Informe-se sobre os programas de coleta seletiva da sua cidade</li>
                    <li>Encaminhe corretamente eletrônicos, pilhas e baterias para pontos de coleta específicos</li>
                    <li>Prefira produtos feitos de materiais reciclados</li>
                </ul>
                <p>A reciclagem reduz a poluição do ar, da água e do solo, economiza energia e cria empregos na indústria de reciclagem.</p>
            `
        },
        compostagem: {
            title: "Compostagem",
            content: `
                <p>A compostagem é um processo biológico de decomposição de matéria orgânica que a transforma em adubo rico em nutrientes para o solo.</p>
                <h4>Como praticar:</h4>
                <ul>
                    <li>Separe restos de alimentos como cascas de frutas e legumes, borra de café e cascas de ovos</li>
                    <li>Evite adicionar carnes, laticínios e alimentos cozidos, que podem atrair pragas</li>
                    <li>Monte uma composteira caseira ou comunitária</li>
                    <li>Alterne camadas de resíduos orgânicos com folhas secas ou serragem</li>
                    <li>Mantenha a composteira úmida e arejada</li>
                    <li>Use o composto pronto em jardins, hortas ou plantas em vasos</li>
                </ul>
                <p>A compostagem reduz a quantidade de resíduos enviados para aterros sanitários, diminuindo a produção de gases de efeito estufa, além de produzir um fertilizante natural que melhora a qualidade do solo.</p>
            `
        }
    };

    // Open modal with correct content when clicking "Saiba mais"
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            modalTitle.textContent = practiceInfo[topic].title;
            modalContent.innerHTML = practiceInfo[topic].content;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Quiz functionality
    const quizQuestions = [
        {
            question: "Qual é o principal objetivo do ODS 12?",
            options: [
                "Acabar com a pobreza",
                "Assegurar padrões sustentáveis de produção e consumo",
                "Promover a igualdade de gênero",
                "Garantir educação de qualidade"
            ],
            correctAnswer: 1
        },
        {
            question: "O que é economia circular?",
            options: [
                "Um sistema econômico que visa eliminar resíduos e utilizar recursos continuamente",
                "Um tipo de moeda virtual",
                "Um modelo econômico baseado apenas em trocas diretas",
                "Um sistema onde os produtos têm forma circular"
            ],
            correctAnswer: 0
        },
        {
            question: "Qual das seguintes ações NÃO contribui para a gestão sustentável de recursos?",
            options: [
                "Reutilizar embalagens",
                "Reciclar papel e plástico",
                "Comprar produtos com múltiplas embalagens descartáveis",
                "Utilizar transporte público"
            ],
            correctAnswer: 2
        },
        {
            question: "Qual é o principal benefício da compostagem?",
            options: [
                "Deixar a casa mais perfumada",
                "Reduzir a quantidade de lixo orgânico enviado aos aterros",
                "Aumentar o consumo de plástico",
                "Eliminar a necessidade de separar o lixo"
            ],
            correctAnswer: 1
        },
        {
            question: "O que significa a política dos 3Rs?",
            options: [
                "Reciclar, Reciclar e Reciclar",
                "Reagir, Reutilizar e Recomendar",
                "Reduzir, Reutilizar e Reciclar",
                "Repensar, Reavaliar e Restaurar"
            ],
            correctAnswer: 2
        }
    ];

    const quizContainer = document.querySelector('.quiz-container');
    const questionContainer = document.getElementById('quiz-question');
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const submitBtn = document.getElementById('submit-quiz');
    const resultDiv = document.getElementById('quiz-result');
    const scoreDisplay = document.getElementById('score');
    const restartBtn = document.getElementById('restart-quiz');

    let currentQuestion = 0;
    const userAnswers = Array(quizQuestions.length).fill(null);

    function displayQuestion(questionIndex) {
        const question = quizQuestions[questionIndex];
        
        let optionsHTML = '';
        question.options.forEach((option, index) => {
            const optionId = `q${questionIndex + 1}${String.fromCharCode(97 + index)}`;
            const checked = userAnswers[questionIndex] === index ? 'checked' : '';
            optionsHTML += `
                <div class="option">
                    <input type="radio" name="q${questionIndex + 1}" value="${index}" id="${optionId}" ${checked}>
                    <label for="${optionId}">${option}</label>
                </div>
            `;
        });

        questionContainer.innerHTML = `
            <h3>Pergunta ${questionIndex + 1}:</h3>
            <p>${question.question}</p>
            <div class="options">${optionsHTML}</div>
        `;

        // Update navigation buttons
        prevBtn.disabled = questionIndex === 0;
        
        if (questionIndex === quizQuestions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }

        // Add event listeners to radio buttons
        const radioButtons = document.querySelectorAll(`input[name="q${questionIndex + 1}"]`);
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                userAnswers[questionIndex] = parseInt(this.value);
            });
        });
    }

    function calculateScore() {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === quizQuestions[index].correctAnswer) {
                score++;
            }
        });
        return score;
    }

    function showResult() {
        questionContainer.style.display = 'none';
        document.getElementById('quiz-navigation').style.display = 'none';
        resultDiv.style.display = 'block';
        
        const score = calculateScore();
        const percentage = (score / quizQuestions.length) * 100;
        
        let feedback = '';
        if (percentage >= 80) {
            feedback = 'Excelente! Você tem um ótimo conhecimento sobre sustentabilidade!';
        } else if (percentage >= 60) {
            feedback = 'Bom trabalho! Você está no caminho certo para entender a sustentabilidade.';
        } else {
            feedback = 'Continue aprendendo! A sustentabilidade é um tema importante para todos nós.';
        }
        
        scoreDisplay.innerHTML = `Você acertou ${score} de ${quizQuestions.length} questões (${percentage}%).<br>${feedback}`;
    }

    function resetQuiz() {
        currentQuestion = 0;
        userAnswers.fill(null);
        displayQuestion(currentQuestion);
        questionContainer.style.display = 'block';
        document.getElementById('quiz-navigation').style.display = 'flex';
        resultDiv.style.display = 'none';
    }

    // Initialize quiz
    displayQuestion(currentQuestion);

    // Event listeners for quiz navigation
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion(currentQuestion);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            displayQuestion(currentQuestion);
        }
    });

    submitBtn.addEventListener('click', showResult);
    restartBtn.addEventListener('click', resetQuiz);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed nav
                behavior: 'smooth'
            });
        });
    });
});

