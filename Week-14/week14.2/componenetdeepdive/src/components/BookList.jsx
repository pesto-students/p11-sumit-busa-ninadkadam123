import React from "react";
import { WithLogging } from "./WithLogging";
import '../css/BookList.css'

 function BookList({books}){
  
    return(
      <table>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
      </tr>
         {
            books.map((book)=> {
               return(
                 
                 <tr>
           <td>{book.title}</td>
           <td>{book.author}</td>
           <td>{book.year}</td>
            </tr>
               )
            })
        
         }
     </table>
        
     )
}
const WtrapperLog=WithLogging(BookList)
export default WtrapperLog