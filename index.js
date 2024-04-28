const signin = document.getElementById("signin");
const signup = document.getElementById("signup");

const toggle = (val) => {
  if (val == "signup") {
    signin.style.display = "none";
    signup.style.display = "flex";
  } else {
    signin.style.display = "flex";
    signup.style.display = "none";
  }
};

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
      "--primary-color": "#5222c0",
      "--secondary-color": "#fefefe",
      "--Tertiary-color": "#fff",
      "--box-shadow-con": "#2d136b",
      "--box-shadow-button": "#3d3d3d",
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

const formSections = document.querySelectorAll("#signupForm > div");
let currentSectionIndex = 0;

function showCurrentSection() {
  if (currentSectionIndex === formSections.length - 1) {
    const navButtons = document.getElementById("navButtons");
    const toggle = document.getElementById("toggle");
    navButtons.style.display = "none";
    toggle.style.display = "none";
  }

  if (currentSectionIndex === 0) {
    document.getElementById("backBtn").style.display = "none";
  } else {
    document.getElementById("backBtn").style.display = "block";
  }

  formSections.forEach((section, index) => {
    if (index === currentSectionIndex) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

showCurrentSection();

document.getElementById("nextBtn").addEventListener("click", function () {
  if (currentSectionIndex < formSections.length - 1) {
    currentSectionIndex++;
    showCurrentSection();
  }
});

document.getElementById("backBtn").addEventListener("click", function () {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    showCurrentSection();
  }
});

function signIn(event) {
  event.preventDefault();
  const uname = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userData = JSON.parse(localStorage.getItem(uname));

  if (userData && userData.password === password) {
    alert("Sign In successful!");
    localStorage.setItem("name", JSON.stringify({ uname }));
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password");
  }
}

const signUp = (event) => {
  event.preventDefault();

  const username = document.getElementById("un").value;
  const password = document.getElementById("pw").value;
  localStorage.setItem(username, JSON.stringify({ username, password }));
  alert("Account created successfully!");
  window.location.href = "index.html";
};
