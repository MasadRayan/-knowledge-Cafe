import React, { useEffect, useState } from 'react';
import Blog from '../EachBlog/Blog';

const Blogs = ({ handleBookmark, handleCount }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs);

    return (
        <div>
            {
                blogs.map(blog =>
                    <Blog
                        handleCount={handleCount}
                        handleBookmark={handleBookmark}
                        key={blog.id}
                        blog={blog}>
                    </Blog>)
            }
        </div>
    );
};

export default Blogs;