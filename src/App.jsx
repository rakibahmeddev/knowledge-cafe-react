import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);  

  const handleBookMark = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks)
  }

  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // const remaingingsBlogs = bookmarks.filter(bookmark => bookmark.id !== id)  }
    // setBookMarks(remaingingsBlogs);
    const remaingingsBlogs = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remaingingsBlogs);
  }

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <div className='flex justify-between gap-4'>
          <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
       
      </div>
    </>
  )
}

export default App
