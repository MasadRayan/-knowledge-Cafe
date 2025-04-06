import React from 'react';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handleCount }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <>
            <div className="card bg-base-100 shadow-xl mb-5 p-5">
                <figure>
                    <img
                        className='object-cover w-10/12 rounded-2xl'
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex justify-center items-center gap-6'>
                            <img
                                className='w-[60px] h-[60px]'
                                src={author_img}
                                alt="" />
                            <div className='text-left'>
                                <p className='text-2xl font-bold'>{author}</p>
                                <p className='text-[#11111199]'>{posted_date}</p>
                            </div>

                        </div>
                        <div className='flex justify-center items-center gap-3 text-2xl'>
                            <p>{reading_time} min read</p>
                            <button onClick={() => handleBookmark(blog)} className='btn btn-circle'><CiBookmark size={23} /></button>
                        </div>
                    </div>
                    <h1 className='max-w-8/12 text-5xl font-bold mb-4'>{title}</h1>
                    <div className="flex max-w-3/12">
                        {
                            hashtags.map((hash, index) =>
                                <p
                                    key={index}
                                    className='text-[#11111199] font-semibold text-xl'>
                                    #{hash}
                                </p>)
                        }
                    </div>
                    <button onClick={() => handleCount(reading_time, id)} className="btn btn-outline btn-info max-w-fit">Mark as Read</button>
                 </div>
            </div>
        </>
    );
};

export default Blog;