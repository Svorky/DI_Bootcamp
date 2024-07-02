let allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image : "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg",
        alreadyRead : true
    },
    {
        title: "The War of the Worlds",
        author: "Herbert Wells",
        image : "https://upload.wikimedia.org/wikipedia/commons/3/30/The_War_of_the_Worlds_first_edition.jpg",
        alreadyRead : false
    }
]
let section = document.querySelector('section')
allBooks.forEach(
    book => {
        let div = document.createElement('div')
        let title = document.createElement('h1')
        title.innerText = book.title
        if(book.alreadyRead) title.style.color = 'red'
        div.appendChild(title)
        let author = document.createElement('h3')
        author.innerText = book.author
        if(book.alreadyRead) author.style.color = 'red'
        div.appendChild(author)
        let img = document.createElement('img')
        img.setAttribute('src', book.image)
        img.setAttribute('width', '100px')
        div.appendChild(img)
        section.appendChild(div)
    }
)