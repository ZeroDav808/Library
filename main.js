const div = document.querySelector("#books");
const addBook = document.querySelector("#add");
const closeJs = document.querySelector("#close");
const dialog = document.querySelector("#dialog");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const container = document.querySelector("#container");

let myLibrary = [];

function Book(author, title) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
}

function addToLibrary(book) {
  myLibrary.push(book);
}

function appendBooks() {
  container.innerHTML = "";
  for (const obj of myLibrary) {
    const para = document.createElement("p");
    const btn = document.createElement("button");
    btn.classList.add("del");
    para.setAttribute("data-id", obj.id); // Use data-id for the book ID
    btn.textContent = "Remove";
    para.textContent = "Title: " + obj.title + ", Author: " + obj.author;
    para.appendChild(btn);
    container.append(para);
  }
}

addBook.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  const book = new Book(author.value, title.value);
  addToLibrary(book);
  appendBooks();
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    console.log("Button clicked!");
    deleteItem(event);
  }
});

function deleteItem(event) {
  const id = event.target.parentElement.getAttribute("data-id"); // Retrieve data-id
  const toDelete = document.querySelector(`[data-id="${id}"]`); // Use attribute selector
  if (toDelete) {
    container.removeChild(toDelete);
  }
  myLibrary = myLibrary.filter((obj) => obj.id !== id); // Filter out the book
}


/*
buttons.forEach((button) => {
   if(button){
    button.addEventListener('click', (event)=> {
        console.log(event.target);
    })
   }
  //button.addEventListener("click", (event) => deleteItem(event));
});

closeJs.addEventListener('click', (event)=>{
    event.preventDefault();
    dialog.close();
});
*/
