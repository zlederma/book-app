export const getBooks = (query) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&orderBy=relevance&maxResults=10&langRestrict=en`).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json()
    })
        .then((data) => console.log(data))
        .catch((error) =>
            console.error('There has been a problem with your fetch operation:', error)
        )
}