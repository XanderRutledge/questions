export default class Question {
    constructor(data) {
        this.id = data.id
        this.answer = data.answer
        this.question = data.question
    }

    get Template() {
        return /*html*/`
        <p>${this.question}</p>
             <p id="answer">${this.answer}</p>
        
        `
    }
}