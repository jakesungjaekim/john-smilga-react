import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const Greeting = () => {
    return (
        <div>
            <BookList/>
        </div>
    )
}


const books = [
    {
        id: 1,
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: './images/book-1.jpg',
      },
      {
        id: 2,
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
      }
]

const BookList = () => {
    const getBook = (id) => {
      const book = books.find((book)=> book.id === id)
      console.log(book);
    }

    return(
        <section className="booklist">
            <EventExamples />
            {books.map((book)=>{
                const { id, img, title, author } = book;
                return(
                    <div>
                        <Book key={id} {...book} img={img} title={title} author={author} getBook={getBook}/>
                    </div>
                )
            })}
        </section>
    )
}

const Book = ({ img, title, author, getBook, id}) => {
  console.log(id)
  const getSingleBook = () => {
    getBook(id)
  }

    return(
        <article className="book">
            <img
            src={img}
            alt='Interesting Facts For Curious Minds'
            />
            <h2>{title}</h2>
            <button onClick={getSingleBook}>click me</button>
            <h4>{author.toUpperCase()}</h4>
        </article>
    )
}

const EventExamples = () => {
    const handleFormInput = (e) => {
      console.log(e);
      // e.target - element
      console.log(`Input Name : ${e.target.name}`);
      console.log(`Input Value : ${e.target.value}`);
      // console.log('handle form input');
    };
    const handleButtonClick = () => {
      alert('handle button click');
    };
    const handleFormSubmission = (e) => {
      e.preventDefault();
      console.log('form submitted');
    };
    return (
        <section>
          {/* add onSubmit Event Handler */}
          <form onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input
              type='text'
              name='example'
              onChange={handleFormInput}
              style={{ margin: '1rem 0' }}
            />
            {/* add button with type='submit' */}
            <button type='submit'>submit form</button>
          </form>
          <button onClick={handleButtonClick}>click me</button>
        </section>
      );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />)

