function averagePagesInBooks(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return books.length > 0 ? totalPages / books.length : 0;
  }
  