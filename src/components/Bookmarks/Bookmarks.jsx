import React from 'react';

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks);
    return (
        <div className='w-2/6 bg-slate-50 text-left rounded-lg p-6'>
            {/* reading time  */}
            <div>
                <div className='bg-purple-200 border border-purple-800 text-purple-800 p-4 mb-12 rounded-lg shadow-md'>
                    <h3>Spent time on read: {readingTime}</h3>
                </div>
            </div>
            <h2 className='text-xl font-medium underline'>Booked Marks {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => (
                    <div key={idx} className='bg-white p-4 my-4 rounded-lg shadow-md'>
                        <h3 className='text-base font-semibold'>{bookmark.title}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Bookmarks;