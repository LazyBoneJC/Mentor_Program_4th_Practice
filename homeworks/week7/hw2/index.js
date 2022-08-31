// 記得用 element.classList.toggle() 開關的效果 就不用再判斷
const questions = document.querySelectorAll(".question-block");

// questions.addEventListener("click", function (e) {
//   document.querySelector(".question-block").classList.toggle("hide-desc");
// });

for (let question of questions) {
  question.addEventListener("click", function (e) {
    question.classList.toggle("hide-desc");
  });
}
