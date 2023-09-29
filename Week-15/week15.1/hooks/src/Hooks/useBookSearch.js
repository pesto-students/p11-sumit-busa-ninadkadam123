import { useMemo } from 'react';

export function useBookSearch(books, text) {
  const filterBooks = useMemo(() => {
    if (!text) {
      return books;
    }

    return books.filter((book) => {
      return book.title.toLowerCase().includes(text.toLowerCase());
    });
  }, [books, text]);

  return [filterBooks];
}
