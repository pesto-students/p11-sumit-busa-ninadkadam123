
import './App.css';
import { Book } from './componenets/Book';
import {  BookList } from './componenets/BookList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <BookList /> */}
       <Book />
      </header>
    </div>
  );
}

export default App;
