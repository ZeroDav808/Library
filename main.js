const div = document.querySelector("#books");
const addBook = document.querySelector("#add");
const closeJs = document.querySelector("#close");
const dialog = document.querySelector("#dialog");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const container = document.querySelector("#container");

let myLibrary = [];

class Book {
  read;
  id;
  constructor(author, title) {
    this.author = author;
    this.title = title;
    this.read = false;
    this.id = crypto.randomUUID();
  }

  hasRead = () => {
    if (this.read) {
      this.read = false;
    } else {
      this.read = true;
    }
  };
}

// function Book(author, title) {
//   this.id = crypto.randomUUID();
//   this.author = author;
//   this.title = title;
//   this.read = false;
// }

// Book.prototype.hasRead = function () {
//   if (this.read) {
//     this.read = false;
//   } else {
//     this.read = true;
//   }
// };

function addToLibrary(book) {
  myLibrary.push(book);
}

function appendBooks() {
  container.innerHTML = "";
  for (const obj of myLibrary) {
    const para = document.createElement("p");
    const btn = document.createElement("button");
    const readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    readBtn.classList.add("read");
    btn.classList.add("del");
    para.setAttribute("data-id", obj.id); // Use data-id for the book ID
    btn.textContent = "Remove";
    para.textContent = "Title: " + obj.title + ", Author: " + obj.author;
    para.appendChild(btn);
    para.appendChild(readBtn);
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

  if (event.target.classList.contains("read")) {
    const id = event.target.parentElement.getAttribute("data-id");
    for (const obj of myLibrary) {
      if (obj.id === id) {
        obj.hasRead();
        console.log(obj.read);
      }
    }
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
