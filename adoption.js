const form = document.getElementById("adoption-form");
const steps = form.querySelectorAll(".step");
let currentStep = 0;

showStep(currentStep);

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    if (index === stepIndex) {
      step.style.display = "block";
    } else {
      step.style.display = "none";
    }
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

form.addEventListener("click", function (event) {
  if (event.target.classList.contains("next-button")) {
    event.preventDefault();
    nextStep();
  }

  if (event.target.classList.contains("prev-button")) {
    event.preventDefault();
    prevStep();
  }
});

const img = document.getElementById("img");
const dogName = document.getElementById("name");
const age = document.getElementById("age");
const breed = document.getElementById("breed");

const updateInfo = () => {
  let dog = JSON.parse(localStorage.getItem("dog"));
  img.src = dog.image;
  dogName.innerText = dog.name;
  age.innerText = dog.age;
  breed.innerText = dog.breed;
};

updateInfo();

const body = document.getElementsByTagName("body")[0];

const changeTheme = (param) => {
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");
  const root = document.documentElement;

  const colors = {
    moon: {
      "--main-bg-color": "#f6d593",
      "--primary-color": "#f6f1e1",
      "--secondary-color": "#ed8685",
      "--Tertiary-color": "#6c7a89",
      "--box-shadow-con": "#5e4b25",
      "--box-shadow-button": "#693938",
      "--border": "#121212",
    },
    sun: {
      "--main-bg-color": "#292c35",
      "--primary-color": "#fefefe",
      "--secondary-color": "#5222c0",
      "--Tertiary-color": "#6c7a89",
      "--box-shadow-con": "#292c35",
      "--box-shadow-button": "#2d136b",
      "--border": "#fff",
    },
  };
  if (param === "sun") {
    moon.style.display = "none";
    sun.style.display = "block";
    body.style.backgroundImage = "url('./images/bg-dark.svg')";
    const chosenColors = colors[param];
    for (const [property, value] of Object.entries(chosenColors)) {
      root.style.setProperty(property, value);
    }
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    body.style.backgroundImage = "url('./images/bg.svg')";
    const chosenColors = colors[param];
    for (const [property, value] of Object.entries(chosenColors)) {
      root.style.setProperty(property, value);
    }
  }
};
