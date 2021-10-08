// Teaching example for Javascript OOP

const assert = require("assert");

class BookList {
    constructor(countRead, countNotRead, nextBook, currentBook, lastBook, allBooks) {
        this.countRead = countRead;
        this.countNotRead = countNotRead;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.allBooks = allBooks;
    }

    add(book) {
        this.allBooks.push(book);
        this.countNotRead += 1;
    }

    countReadBooks() {
        let count = 0;
        for (let book of this.allBooks) {
            if (book.read === true) {
                count++;
            }
        }
        return count;
    }

    countNotRead() {
        return this.allBooks.length - this.countReadBooks()
    }

    finishCurrentBook() {
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;

        // increment findbookIndex to get the book after the old nextBook
        let newNextBook = this.allBooks[this.findBookIndex(this.nextBook) + 1];

        this.countRead += 1;
        this.countNotRead -= 1;

        this.nextBook = newNextBook;
    }

    // return the index of the book in the BookList's allBooks array
    findBookIndex(book) {
        let bookIndex = this.allBooks.indexOf(book);
        if (bookIndex == -1) {
            console.error("Book does not exist in allBooks array")
            return false
        } else {
            return bookIndex;
        }

    }
}

class Book {
    constructor(title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        // readDate must be undefined or Date object
        this.readDate = readDate;
    }
}


let bookMagicians = new Book("The Magicians", "Fantasy", "Lev Grossman", true, Date(Date.now()));

let bookCat = new Book("Cat in the Hat", "Kids", "Dr. Seuss", true, Date(Date.now()));

// cat is lastRead
let bookSee = new Book("See Spot Run", "Kids", "Mrs. Author", true, Date(Date.now()));

// moby is currentBook
let bookMoby = new Book("Moby Dick", "Classical", "Captain Ahab", false, undefined);

// nate is nextBook
let bookNate = new Book("Nate the Great", "Kids", "Mr. Nathan", false, undefined);

let allMyBooks = [bookMagicians, bookCat, bookSee, bookMoby, bookNate];
// let allMyBooks = 23

let myBookList = new BookList(3, 2, bookNate, bookMoby, bookCat, allMyBooks);

console.log(myBookList.countReadBooks());

// assert(myBookList.countRead === 3);
// assert(myBookList.countNotRead === 2);

// // console.log(myBookList);
// // console.log(myBookList.currentBook);
// assert(myBookList.currentBook === bookMoby);

// let bookHarry = new Book("Harry Potter", "Fantasy", "JK Rowling", false, undefined);
// myBookList.add(bookHarry);
// assert(myBookList.allBooks.length == 6);
// assert(myBookList.allBooks[5] === bookHarry);

// // assert(myBookList.countRead === 4)
// // console.log(myBookList.countNotRead);
// assert(myBookList.countNotRead === 3);

// myBookList.finishCurrentBook();
// assert(myBookList.lastBook === bookMoby);
// assert(myBookList.currentBook === bookNate);

// assert(myBookList.countRead === 4);
// assert(myBookList.countNotRead === 2);

// // console.log(myBookList.nextBook);
// assert(myBookList.nextBook === bookHarry);

// // let dateTest = new Date();
// // console.log(dateTest instanceof Date);
// assert(myBookList.lastBook.readDate instanceof Date);
// console.log(myBookList);