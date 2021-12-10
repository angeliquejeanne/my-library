// Form add book section
const form = document.querySelector("#add-book");
const bookInput = document.querySelector("#book-input");
// List of book section
const bookLists = document.querySelector("#book-list ul");
// Filter section
const filter = document.querySelector("#search-books input[type=text]");

// Event listener controller
loadEventListener();
function loadEventListener() {
    // LineThrough
    bookLists.addEventListener("click", lineThroughs);
    // Filter section
    filter.addEventListener("keyup", filterBooks);
    // Get book from local storage
    document.addEventListener("DOMContentLoaded", getBooks);
}

// LineThrough
function lineThroughs(e) {
    if (e.target.clessList.contains("list")) {
        if (
            e.target.firstElementChild.style.textDecorationLine === "line-through"
        ) {
            e.target.firstElementChild.style.textDecorationLine = "none";
            e.target.firstElementChild.style.color = "black";
            e.target.style.background = "#fff";
        } else {
            e.target.firstElementChild.style.textDecorationLine = "line-through";
            e.target.firstElementChild.style.color = "#b8b8b8";
            e.target.style.background = "#f4f4f4";
        }
    }
}

// Filter the books
function filterBooks(e) {
    // Take the value from the input and convert into lower case
    const words = e.target.value.toLowerCase();
    // Get the book list
    const books = document.querySelectorAll("#book-list li");
    // Loop Through each book li
    books.forEach(function(book) {
        const booksText = book.firstElementChild.textContent;
        //  Compare the booksText content with words
        if (booksText.toLowerCase().indexOf(words) != -1) {
            book.style.display = "flex";
        } else {
            book.style.display = "none";
        }
    });
}