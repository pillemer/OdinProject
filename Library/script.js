let library = []
let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 310, false);
let songOfAchiles = new Book('The Song of Achilles', 'Madeline Miller', 416, true)
let deadhouseGates = new Book('Deadhouse Gates', 'Steven Erikson', 943, true);
let bible = new Book('Bible', 'God', 666, false);

addBooktoLibrary(theHobbit)
addBooktoLibrary(songOfAchiles)
addBooktoLibrary(deadhouseGates)
addBooktoLibrary(bible)

function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    this.info = function() {
        return [title, author, pages, read]
    }
}

displayBooks(library);

function addBooktoLibrary (book) {
    library.push(book)
}

function updateDisplay() {
    document.querySelector('#container').innerHTML = '';
    displayBooks(library);
}

function clearFields() {
    const fields = document.querySelectorAll('input');
    for (let i = 0; i <fields.length; i++) {
        fields[i].value = '';
    }
}

function displayBooks (library) {
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(${library.length}, 1fr)`;
    for (let i = 0; i < library.length; i++) {
        currentBook = library[i];
        const card = document.createElement('div');
        card.title = i;
        card.id = 'card'
        card.innerHTML = `"${currentBook.title}"<br>by ${currentBook.author}<br> ${currentBook.pages} pages long<br>`
        // add a 'mark as read/unread' button
        const readButton = document.createElement('button');
        if ((currentBook).read){
            readButton.innerHTML = 'Mark as unread'    
        } else { readButton.innerHTML = 'Mark as read'};
        readButton.id = `read${i}`;
        readButton.className = 'readButton button';
        readButton.addEventListener('click', function() {
            currentBook.read = !currentBook.read;
            if (currentBook.read){
                readButton.innerHTML = 'Mark as unread'    
            } 
            else { 
                readButton.innerHTML = 'Mark as read'
            };
        })
        card.appendChild(readButton);
        // add a 'remove from library' button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Remove'
        deleteButton.id = `delete${i}`;
        deleteButton.className = 'deleteButton button';
        deleteButton.addEventListener('click', function() {
            library.splice(i, 1)
            updateDisplay();
        })
        card.appendChild(deleteButton);
        container.appendChild(card);
    }
}
const addNewButton = document.getElementById('addNew')
addNewButton.addEventListener('click', () => {
    document.querySelector('#input-field').style.display = 'inline-block'
    addNewButton.style.display = 'none';
})

const cancelButton = document.getElementById('cancel')
cancelButton.addEventListener('click', () => {
    document.querySelector('#input-field').style.display = 'none'
    addNewButton.style.display = 'inline-block';
})


const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', () => {
    const inputFields = document.querySelectorAll('input')
    for (let i = 0; i < inputFields.length; i ++) {
        if (inputFields[i].value == '') {
            alert('fill in all the details before submitting')
            return;
        } 
    }
    const newBook = new Book(inputFields[0].value, inputFields[1].value, inputFields[2].value, inputFields[3].value);
    addBooktoLibrary(newBook);
    document.querySelector('#input-field').style.display = 'none'
    addNewButton.style.display = 'inline-block';
    clearFields()
    updateDisplay();
})
