import defaultSrc from '../assets/default-src.png'
export const getBooks = (query) => {
    return (
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&orderBy=relevance&maxResults=10&langRestrict=en&projection=lite`).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json()
        })
            .then((data) => {
                return cleanData(data)
            })
            .catch((error) =>
                console.error('There has been a problem with your fetch operation:', error)
            )
    )
}

const cleanData = (data) => {
    data = data.items;
    let cleanedData = [];
    for (let i = 0; i < data.length; i++) {
        let title = (data[i].volumeInfo.title !== undefined) ? data[i].volumeInfo.title : "";
        let author = (data[i].volumeInfo.authors !== undefined && data[i].volumeInfo.authors.length > 0) ? data[i].volumeInfo.authors[0] : "";
        //insert a default src
        let image = (data[i].volumeInfo.imageLinks.thumbnail !== undefined) ? data[i].volumeInfo.imageLinks.thumbnail : defaultSrc;

        cleanedData.push({
            title: title,
            author: author,
            image: image
        })
    }
    return cleanedData;
}