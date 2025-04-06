import React from 'react';

const Bookmarks = ({bookMarked}) => {
    // console.log(bookMarked);
    return (
        <>
        {
         bookMarked.map(books => <div key={books.id} className='p-5 shadow-2xl bg-white rounded-xl my-4'>
            <p className='text-lg font-semibold my-4'>
            {books.title}
            </p>
         </div>)   
        }
        </>
    );
};

export default Bookmarks;