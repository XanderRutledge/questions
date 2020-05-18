import QuestionService from "../Services/QuestionService.js";
import store from "../store.js";
import Question from "../Models/Question.js";

//Private
function _draw() {
  let question = store.State.question;
  let template = ''
  question.forEach(q => { template += q.Template })
  document.getElementById('question').innerHTML = template
}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("question", _draw);

    QuestionService.getApiQuestion();
  }
  next() {
    QuestionService.getApiQuestion();
  }
  show() {
    QuestionService.show();
  }

}
