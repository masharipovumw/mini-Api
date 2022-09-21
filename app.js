const Body = document.querySelector('#body')

let array = []

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        return response.json()
    })
    .then((arr) => {
        array = arr
        render()
    })

function render() {
    for (const comments of array) {
        tbody(comments)
    }
}

function tbody(comments) {
    let Bodytr = document.createElement('tr')

    let number = document.createElement('th')
    number.textContent = comments.id

    let name = document.createElement('td')
    name.textContent = comments.name

    let comment = document.createElement('td')
    comment.textContent = comments.body

    let email = document.createElement('td')
    email.textContent = comments.email

    Bodytr.append(number, name, comment, email)
    Body.append(Bodytr)
}


