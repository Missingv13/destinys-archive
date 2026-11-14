
/* =================================
   DESTINY'S ARCHIVE
   Main website functionality
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("book-search");
  const bookGrid = document.getElementById("book-grid");
  const searchMessage = document.getElementById("search-message");

  // BOOK SEARCH
  if (searchForm && searchInput && bookGrid) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      searchBooks();
    });

    searchInput.addEventListener("input", searchBooks);
  }

  function searchBooks() {
    const query = searchInput.value.toLowerCase().trim();
    const books = bookGrid.querySelectorAll(".book-card");
    let matches = 0;

    books.forEach((book) => {
      const searchableText = book.textContent.toLowerCase();
      const isMatch = searchableText.includes(query);

      book.style.display = isMatch ? "" : "none";

      if (isMatch) matches++;
    });

    if (query === "") {
      searchMessage.textContent = "A PLACE TO BEGIN";
    } else if (matches > 0) {
      searchMessage.textContent =
        `${matches} book${matches === 1 ? "" : "s"} found`;
    } else {
      searchMessage.textContent =
        "No books found. Try another title or author.";
    }
  }

  // SMOOTH NAVIGATION
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // INITIAL LIBRARY COUNTERS
  const totalBooks = document.getElementById("total-books");
  const finishedBooks = document.getElementById("finished-books");

  if (totalBooks) totalBooks.textContent = "0";
  if (finishedBooks) finishedBooks.textContent = "0";

  console.log("Destiny's Archive is ready!");
});
