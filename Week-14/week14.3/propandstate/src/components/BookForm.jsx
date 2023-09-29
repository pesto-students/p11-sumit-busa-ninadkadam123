import React, { useState } from "react";
import './BookForm.css';

export function BookForm({addBooktoList}){

  const [book,setBook] =useState({
    title:'',
    author:'',
    year:''
  })

  const addBook=(event)=>{
       event.preventDefault();
       if(book.title && book.author &&  book.year){
        addBooktoList({title: book.title, author: book.author, year: book.year})
       }else{
        alert('Please fill the field')
       }
    
    setBook({ title: '', author: '', year: '' });
  }

 const  handleInputChange = (event) => {
   const {name,value} =event.target


   setBook({...book,[name]:value})

  }

    return (
        
        
        <form onSubmit={addBook} className="BookForm">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleInputChange}
            
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={book.year}
            onChange={handleInputChange}
          />
          <button className="Button" type="submit">Add Book</button>
        </form>
      
     )
 }



// export  class BookForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       author: '',
//       year: '',
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
    
//   }

//   handleSubmit = (event) => {
//     // event.preventDefault();
//     const { title, author, year } = this.state;
//     if (title && author && year) {
//       // Create a new book object
//       const newBook = {
//         title,
//         author,
//         year,
//       };
//       // Call a function passed from the parent component to add the new book
//       this.props.onAddBook(newBook);
//       // Clear the form fields
//       this.setState({ title: '', author: '', year: '' });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Add a New Book</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={this.state.title}
//             onChange={this.handleInputChange}
//           />
//           <input
//             type="text"
//             name="author"
//             placeholder="Author"
//             value={this.state.author}
//             onChange={this.handleInputChange}
//           />
//           <input
//             type="text"
//             name="year"
//             placeholder="Year"
//             value={this.state.year}
//             onChange={this.handleInputChange}
//           />
//           <button type="submit">Add Book</button>
//         </form>
//       </div>
//     );
//   }
// }


// // 