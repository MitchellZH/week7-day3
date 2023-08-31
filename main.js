// connect/test js file to html
console.log("testing");

// .getElementsByTagName()
const h1s = document.getElementsByTagName("h1");
console.log(h1s);

// .getElementsByClassName()
const students = document.getElementsByClassName("student");
console.log(students);

// .getElementById()
const instructors = document.getElementById("instructors");
console.log(instructors);

// .querySelector() (ES6 Modern Approach)
// .querySelectorAll()
const h1sQuery = document.querySelector("#instructors");
console.log(h1sQuery);

// .innerText property: Changes the text
students[1].innerText = "Mitchell";
students[2].innerText = "Omar";
h1s[1].innerText = "I am changed";

// .innerHTML property: Allows you to write HTML code
const dylansDiv = document.getElementsByClassName("dylans-div")[0];
dylansDiv.innerHTML = `
    <p>I was created from JS</p>
`;

// .createElement()
const newBtn = document.createElement("button");
newBtn.innerText = "Thieves";
// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()
document.body.append(newBtn);

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)
newBtn.addEventListener("click", () => {
  if (newBtn.className === "") {
    newBtn.className = "purple";
  } else if (newBtn.className === "purple") {
    newBtn.className = "green";
  } else {
    newBtn.className = "";
  }
});

const changeColor = () => {
  switch (newBtn.className) {
    case "":
      newBtn.className = "purple";
      break;
    case "purple":
      newBtn.className = "green";
      break;
    default:
      newBtn.className = "";
  }
};

// Option 2: using onclick attribute in HTML
// onclick="function(event)"

// Lets create a new button and append to a specfic div
const newBtn2 = document.createElement("button");
newBtn2.innerText = "Anotha one";
dylansDiv.append(newBtn2);

// adding addEventListener() to new button to add text every time its clicked
newBtn2.addEventListener("click", () => {
  const pTag = document.createElement("p");
  pTag.innerText = "YEEEEEEEEEEER";
  document.body.append(pTag);
});

// grabbing form data with .addEventListener()
const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formEl);
  const pokeName = formEl[0].value;
  pokeData(pokeName);
});

const pokeData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  console.log(data);
};
