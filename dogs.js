const cardsContainer = document.getElementById("cards");
const modal = document.getElementById("dogModal");
const modalDogImage = document.getElementById("modalDogImage");
const modalDogName = document.getElementById("modalDogName");
const modalDogAge = document.getElementById("modalDogAge");
const modalDogBreed = document.getElementById("modalDogBreed");
const modalBg = document.getElementById("modalBackground");

const dogInfo = [
  {
    name: "goge",
    age: "8 months",
    breed: "Spanish breed",
    image: "./images/dog1.jpg",
  },
  {
    name: "Rex",
    age: "2 years",
    breed: "German Shepherd",
    image: "./images/dog2.jpg",
  },
  {
    name: "Bella",
    age: "1 year",
    breed: "Labrador Retriever",
    image: "./images/dog3.jpg",
  },
  {
    name: "Charlie",
    age: "3 years",
    breed: "Golden Retriever",
    image: "./images/dog4.jpg",
  },
  {
    name: "Max",
    age: "5 years",
    breed: "Boxer",
    image: "./images/dog5.jpg",
  },
  {
    name: "Lucy",
    age: "4 years",
    breed: "Poodle",
    image: "./images/dog6.jpg",
  },
  {
    name: "Bailey",
    age: "6 months",
    breed: "Siberian Husky",
    image: "./images/dog7.jpg",
  },
  {
    name: "Daisy",
    age: "2 years",
    breed: "Beagle",
    image: "./images/dog8.jpg",
  },
  {
    name: "Rocky",
    age: "7 years",
    breed: "Rottweiler",
    image: "./images/dog9.jpg",
  },
  {
    name: "Molly",
    age: "1.5 years",
    breed: "French Bulldog",
    image: "./images/dog10.jpg",
  },
  {
    name: "Luna",
    age: "9 months",
    breed: "Australian Shepherd",
    image: "./images/dog11.jpg",
  },
  {
    name: "Cooper",
    age: "4 years",
    breed: "Border Collie",
    image: "./images/dog12.jpg",
  },
  {
    name: "Bogart",
    age: "3 years",
    breed: "Pitbull",
    image: "./images/dog13.jpg",
  },
];

cardsContainer.innerHTML = dogInfo
  .map(
    (dog) => `
    <div class="card">
      <img src="${dog.image}" alt="dog" />
      <div><p class="name">Name: ${dog.name}</p>
    </div>
    </div>
`
  )
  .join("");

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener(
    "click",
    (function (dog) {
      return function () {
        showModal(dog);
      };
    })(dogInfo[i])
  );
}

let currentDog = {};

function showModal(dog) {
  currentDog = dog;
  modalDogImage.src = dog.image;
  modalDogName.textContent = `Name: ${dog.name}`;
  modalDogAge.textContent = `Age: ${dog.age}`;
  modalDogBreed.textContent = `Breed: ${dog.breed}`;
  modal.style.display = "block";
  modalBg.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
  modalBg.style.display = "none";
}

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
      "--main-bg-color": "#5222c0",
      "--primary-color": " #292c35",
      "--secondary-color": "#fefefe",
      "--Tertiary-color": "#fff",
      "--box-shadow-con": "#fff",
      "--box-shadow-button": "#2d136b",
      "--border": "#fff",
    },
  };
  if (param === "sun") {
    moon.style.display = "none";
    sun.style.display = "block";
    const chosenColors = colors[param];
    for (const [property, value] of Object.entries(chosenColors)) {
      root.style.setProperty(property, value);
    }
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    const chosenColors = colors[param];
    for (const [property, value] of Object.entries(chosenColors)) {
      root.style.setProperty(property, value);
    }
  }
};

const navigate = () => {
  localStorage.setItem("dog", JSON.stringify(currentDog));
  window.location.href = "adoption.html";
};
