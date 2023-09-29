import React, { useContext, useState } from "react";
import { DataLoader } from "./DataLoader";
import { useBookSearch } from "../Hooks/useBookSearch";
import { ThemeContext } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useSorter } from "../Hooks/useSorter";

export function BookList(){
    const [books,setBooks]=useState([])
    const [searchText,setSearchText]=useState('')
    const [filteredBooks]=useBookSearch(books,searchText)
    const {theme}=useContext(ThemeContext)
    const [field,setField]=useState('')
    const sortedBooks=useSorter(books,field)
 
   const listStyle={
    backgroundColor:theme==='light'?'#fff':'#333',
    color:theme==='light'?'#333':'#fff'
   }

    return (
        <div style={listStyle}>
            <h1>BookList</h1>
            <ThemeSwitcher/>
            <DataLoader setBooks={setBooks}/>
            <label>
                Sort By:
                <select value={field} 
                onChange={(e)=>setField(e.target.value)}>
                <option value="">No Sorting</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                </select>

            </label>
            <ul>
               {sortedBooks.map((book,index)=>
                <li key={index}>
                <strong>Title:</strong> {book.title},{' '}
                <strong>Author:</strong> {book.author},{' '}
                <strong>Year:</strong> {book.year}
                </li>
               )} 
            </ul>
            
             <input  
             placeholder="Serch Books"
             value={searchText}
             onChange={(e)=>setSearchText(e.target.value)}
             />

            <ul>
               {filteredBooks.map((book,index)=>
                <li key={index}>
                <strong>Title:</strong> {book.title},{' '}
                <strong>Author:</strong> {book.author},{' '}
                <strong>Year:</strong> {book.year}
                </li>
               )} 
            </ul>
        </div>
    )
}