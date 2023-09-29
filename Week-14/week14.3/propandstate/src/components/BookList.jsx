import React, { useState } from "react";
import { BookForm } from "./BookForm";
import './BookList.css'
export function BookList(){
  let [books,setBooks]=useState([])

  const addBooktoList=(book)=>{
    
    setBooks([...books,book]);
  }

  const deleteBook=(index)=>{

     

     setBooks(books.filter((book,i)=>{
        
        console.log(i !== index)
          return i !== index
       }))
  }
    

    return (
        <div className="BookList">
        <h1>My Book List</h1>
        <BookForm addBooktoList={addBooktoList} />
        <div>
        {books.length === 0 ? (
          <p>The book list is currently empty.</p>
        ) : (
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <strong>Title:</strong> {book.title},{' '}
                <strong>Author:</strong> {book.author},{' '}
                <strong>Year:</strong> {book.year}
                <button onClick={() => deleteBook(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}

        </div>
        
        </div>
    )
}




