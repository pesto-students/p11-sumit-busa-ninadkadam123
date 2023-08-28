
export function Bookdetails(props){

    const {title,author,year}=props.book

    

    return(
        <div>
          <h3>{title}</h3>
                <p>Author: {author}</p>
                <p>Year: {year}</p>
        </div>
    )
}