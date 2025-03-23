const div = document.querySelector('#books');
let myLibrary = [];

function Book(author, title){
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
}

function addToLibrary(book){
    myLibrary.push(book);
}

function appendBooks(){
    for(const obj of myLibrary){
        const para = document.createElement('p');
        para.textContent = "Title: " + obj.title + ", Author: " + obj.author;
        div.append(para);
    }
}

let lotr = new Book('Tolkein', 'Fellowship of The Ring');
let twilight = new Book('Somone IDK', 'Twilight');
let lorax = new Book('Dr.Suess', 'The Lorax');

addToLibrary(lotr);
addToLibrary(twilight);
addToLibrary(lorax);

appendBooks();