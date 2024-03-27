export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''
        
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'
            button.addEventListener('click', () => callback(choices[i]))

            choicesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score 
     */
    showScore(score) {
        const quizEndHTML = `
            <h2>Result</h2>
            <h3>You Score: ${score}</h3>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML;
        element.className = 'result'
    }


    /**
     * 
     * @param {number} currentIndex the current index the quiz
     * @param {number} total the total questions
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}