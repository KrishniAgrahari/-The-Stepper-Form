const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progress = document.getElementById("progress");
const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");
const form = document.getElementById("multi-step-form");

let formStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStep++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStep--;
    updateFormSteps();
    updateProgressbar();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Submitted Successfully . 😇😇 ");
 
});

function updateFormSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle("form-step-active", index === formStep);
  });
}

function updateProgressbar() {
  progressSteps.forEach((step, index) => {
    step.classList.toggle("progress-step-active", index <= formStep);
  });
  const progressWidth = (formStep / (progressSteps.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;
}
