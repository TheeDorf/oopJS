class Book {
constructor(title, author, genre){
    this.title= title;
    this.author= author;
    this.genre= genre;
    this.pages = 0;
}
}

class Shelf{
    constructor(){
        this.books = [];
        this.things = [];
    }
    addBook(book){
        this.books.push(book)
}
    addThings(things){
        this.things.push(thing)
    }
    findBook(title){
        return this.books.find((book)=> {
            return book.title == book
        })
    }
}

const lordOfTheRings = new Book("Lord of the rings return of the king", "jrr tolkien", "fantasy");
lordOfTheRings.pages = 350
const catcherInTheRye = new Book("Catcher in the Rye","JD Sallinger" ,"fiction" )
const dune = new Book("Dune","Frank Herbert", "sci-fi")

 
const topShelf = new Shelf();
topShelf.addBook(lordOfTheRings);
topShelf.addBook(catcherInTheRye);
topShelf.addBook(dune);

console.log(topShelf.findBook("dune"));