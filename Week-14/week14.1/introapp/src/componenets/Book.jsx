
export function Book(){
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        { title: 'Book 4', author: 'Author 4', year: 2023 },
        { title: 'Book 5', author: 'Author 5', year: 2016 },
        { title: 'Book 6', author: 'Author 6', year: 2029 },
      ];
      

    return ( <div>
        <ul>
          {books.map((book) => {
            return (
                <div >
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
              </div>
              
            );
          })}
        </ul>


      </div>
      )
}