import defaultSrc from '../assets/default-src.png'
export class Books {
    constructor() {
        this.query = "";
        this.width = 0;
        this.books = new Map();
        this.num = 0;
    }

    getQuery() {
        return this.query;
    }

    getWidth() {
        return this.width;
    }

    getNum() {
        return this.num;
    }

    /**
     * @param {string} query
     */
    setQuery(query) {
        this.query = query
    }

    /**
     * @param {int} width
     */
    setWidth(width) {
        this.width = width;
    }

    clear() {
        this.query = "";
        this.width = 0;
        this.books = [];
        this.num = 0;
    }

    //true if successful, false otherwise
    fetchData() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.query}&printType=books&orderBy=relevance&maxResults=10&langRestrict=en&projection=lite&filter=partial`).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return false
        })
            .then((data) => {
                this.add(data)
            })
            .catch((error) =>
                console.error('There has been a problem with your fetch operation:', error)
            )

        return true
    }

    serialize() {
        let serializedBooks = []
        for (const book of this.books.values()) {
            serializedBooks.push(book);
        }
        return serializedBooks;
    }

    add(data) {
        data = data.items;
        if (data === undefined) {
            return false
        }
        for (let i = 0; i < data.length; data++) {
            let datum = this.clean(data[i]);
            let key = this.getKey(datum);
            this.books.set(key, datum);
        }
        return true;
    }

    getKey(datum) {
        let key = datum.title + datum.author;
        //Gets rid of duplicate books that are entered with different capitalizations
        key = key.trim();
        key = key.toLowerCase();
        return key;
    }

    //return an object with the title, object, and image
    clean(datum) {
        let title = (datum.volumeInfo.title !== undefined) ? datum.volumeInfo.title : "";
        let author = (datum.volumeInfo.authors !== undefined && datum.volumeInfo.authors.length > 0) ? datum.volumeInfo.authors[0] : "";
        let image = (datum.volumeInfo.imageLinks !== undefined) ? datum.volumeInfo.imageLinks.thumbnail : defaultSrc;

        return ({ title: title, author: author, image: image })
    }

    calculateNums() {

    }

    getBooks(query) {
        this.setQuery(query);
        this.fetchData();
        return this.serialize();
    }


}
