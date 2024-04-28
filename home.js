let mode = "light";

const hero = document.getElementsByClassName("hero")[0];

const changeTheme = (param) => {
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");
  const root = document.documentElement;
  const dog = document.getElementById("dog");

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
      "--main-bg-color": "#5222c0",
      "--primary-color": "#292c35",
      "--secondary-color": "#5222c0",
      "--Tertiary-color": "#fff",
      "--box-shadow-con": "#fff",
      "--box-shadow-button": "#2d136b",
      "--border": "#fff",
    },
  };
  if (param === "sun") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.getElementById("theme-txt").innerText = "Light Mode:";
    dog.src = "./images/d.png";
    hero.style.backgroundImage = "url('./images/bg-dark.svg')";
    mode = "dark";
    const chosenColors = colors[param];
    for (const [property, value] of Object.entries(chosenColors)) {
      root.style.setProperty(property, value);
    }
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    dog.src = "./images/b.png";
    hero.style.backgroundImage = "url('./images/bg.svg')";
    mode = "light";
    document.getElementById("theme-txt").innerText = "Dark Mode:";
    const chosenColors = colors[param];
    for (const [property, value] of Object.entries(chosenColors)) {
      root.style.setProperty(property, value);
    }
  }
  toggleNav();
};

const toggleNav = () => {
  const mobileNav = document.getElementById("mobile-nav");
  const menu = document.getElementById("menu");

  if (mobileNav.style.right === "-100%") {
    mobileNav.style.right = "0";
    if (mode == "light") {
      menu.src = "./images/close.svg";
    } else {
      menu.src = "./images/close-night.svg";
    }
  } else {
    mobileNav.style.right = "-100%";
    if (mode == "light") {
      menu.src = "./images/menu.svg";
    } else {
      menu.src = "./images/menu-night.svg";
    }
  }
};

const dd = document.getElementById("dd");

const drop = () => {
  dd.style.display = "flex";
};

const out = () => {
  dd.style.display = "none";
};

const logout = () => {
  window.location.href = "index.html";
};

const name = document.getElementsByClassName("name");

const getName = () => {
  const userData = JSON.parse(localStorage.getItem("name"));

  name[0].innerText = userData.uname;
  name[1].innerText = userData.uname;
};

getName();
