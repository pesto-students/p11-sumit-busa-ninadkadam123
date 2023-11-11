import { useMemo } from 'react';

export function useSorter(books, field) {
  const sortedBook = useMemo(() => {
    const bookCopy = [...books];

    if (field === 'title') {
      bookCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else if (field === 'author') {
      bookCopy.sort((a, b) => a.author.localeCompare(b.author));
    }

    return bookCopy;
  }, [books, field]);

  return sortedBook;
}
