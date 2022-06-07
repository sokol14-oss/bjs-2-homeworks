class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        this.state = Number(this.state.toFixed(2));

    }
    set control(number) {
        if (number < 0) {
            number = 0;
        }
        if (number > 100) {
            number = 100;
        }
        this.state = number;
        return this.state;
    }
    get control() {

        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = "book";
    }

}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";

    }
}
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}
class Library {
    constructor(name, books) {
        this.name = "";
        this.books = [];
    }
    addBook(book) {
        if (this.state > 30) {
            this.books.push(book)
        }

    }
    findBookBy(type, value) {
        let res = this.books.find((item) => item === [type] || item === [value]);
        if (res === undefined) {
            return null
        }
        return res;
    }
    giveBookByName(bookName) {
        function search(element) {
            return element === bookName;
        }
        let elem = this.books.findIndex(search);
        if (elem === -1) {
            return null;
        }
        return this.books.splice(0, elem);

    }
}