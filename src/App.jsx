import Blogs from "./components/Blog/Blogs"
import Navbar from "./components/Navbar/Navbar"

function App() {


  const handleBookmark = () => {
    console.log("hello");
  }

  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="main-container flex justify-center my-10">
          <div className="left-container w-[70%] ">
            <Blogs></Blogs>
          </div>
          <div className="right-container w-[30%] text-center">
           <h1>Reading time: 0</h1>
           <h1>Bookmarked Count: 0</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
