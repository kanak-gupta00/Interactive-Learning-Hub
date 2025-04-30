const quizContainer = document.getElementById("quiz-container");

quizData.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-block");

  questionDiv.innerHTML = `
    <p><strong>${index + 1}. ${q.question}</strong></p>
    <div class="options" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
      ${q.options
        .map(
          (option) => `
        <button 
          onclick="checkAnswer(this, '${q.answer}')" 
          style="padding: 8px 12px; width: fit-content; cursor: pointer;">
          ${option.replace(/</g,"&lt;").replace(/>/g, "&gt;")}
        </button>
      `
        )
        .join("")}
    </div>
    <hr>
  `;

  quizContainer.appendChild(questionDiv);
});

function checkAnswer(button, correctAnswer) {
  const buttons = button.parentElement.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.style.backgroundColor = "lightgreen";
    } else {
      btn.style.backgroundColor = "lightcoral";
    }
  });
}