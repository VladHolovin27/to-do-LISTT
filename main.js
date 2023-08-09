const form = document.querySelector("#myform");
const ul = document.querySelector("ul");

let history = [];
let id = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let text = event.target.elements.text.value;
  let category = event.target.elements.category.value;


  create(text, category);
});

function create(text, category) {
  let elements = {
    id: (id++).toString(),
    text,
    category,
  };
  history.push(elements);
  console.log(history);

  let a = document.createElement("li");
  a.innerHTML = `
    <h2>text: ${elements.text}</h2>
    <p>category: ${elements.category}</p>
    <p>icon: icon ${elements.category}</p>
    `;
  form.after(a);
}

