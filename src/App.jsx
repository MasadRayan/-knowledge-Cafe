import { useState } from "react";
import Blogs from "./components/Blog/Blogs"
import Navbar from "./components/Navbar/Navbar"
import Bookmarks from "./components/Bookmarkes/Bookmarks";

function App() {

  const [bookMarked, setBookMarked] = useState([]);
  const [count , setCount] = useState(0);

  const handleCount = (reading_time, id) => {
    const newCount = count + reading_time;
    setCount(newCount);
    handleRemoveBookMark(id);
  }

  const handleRemoveBookMark = (id) => {
    const remaining = bookMarked.filter((mark) => mark.id !== id);
    setBookMarked(remaining);
  }

  const handleBookmark = (blog) => {
    const newBookMark = [...bookMarked, blog];
    setBookMarked(newBookMark);
  }

  // console.log(bookMarked);
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="main-container gap-5 flex justify-center my-10">
          <div className="left-container w-[70%] ">
            <Blogs handleBookmark={handleBookmark} handleCount={handleCount}></Blogs>
          </div>
          <div className="right-container w-[30%] text-center">
            <p className="text-[#6047EC] text-2xl font-bold border p-6 bg-[#6047EC1A] rounded-xl mb-4">Spent time on read : {count} min</p>
            <div className="bg-[#1111110D] shadow-xl rounded-xl py-5 px-7 text-left">
              <p className="text-2xl font-bold mb-4">Bookmarked Blogs : {bookMarked.length}</p>
              <Bookmarks bookMarked={bookMarked}></Bookmarks>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
