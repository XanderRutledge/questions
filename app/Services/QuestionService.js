import store from "../store.js";
import Question from "../Models/Question.js";

const _api = axios.create({
    baseURL: "https://jservice.io/api/random" // default route
})

class QuestionService {

    getApiQuestion() {
        _api.get()
            .then(response => {
                let question = response.data.map(rq => new Question(rq))
                store.commit("question", question)
            })
            .catch(error => {
                console.error(error)
            })
    }

    show() {
        document.getElementById("answer").style.display = "block"
    }
}

const service = new QuestionService();
export default service;
