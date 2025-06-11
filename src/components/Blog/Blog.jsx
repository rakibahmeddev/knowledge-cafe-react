
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookMark, handleReadingTime}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='bg-slate-50 border-b mb-12 pb-6 rounded-lg shadow-lg'>
            
            <img className='w-full rounded-lg' src={cover} />
            <div className='flex justify-between px-4'>
                <div className='flex items-center pt-6 pb-6 gap-2'>
                    <div>
                        <img className='w-12' src={author_img} alt="" />
                    </div>
                    <div className='text-left'>
                        <p className='font-semibold'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                        <span>{reading_time} Minutes Read</span>
                        <button onClick={()=> handleBookMark(blog)} className='ml-1 text-2xl text-blue-600'><FaRegBookmark /></button>
                </div>
            </div>

                {/* blog title  */}
                <h2 className='text-left text-2xl font-semibold px-4'>{title}</h2>

            {/* hashtags */}
            <div>
                <div className='flex px-4 pt-4'>
                    {
                        hashtags.map((tag, index) => (
                            <span key={index} className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900'>#{tag}</span>
                        ))
                    }
                </div>
            </div>

        <div className='flex items-start px-4 pt-4'>
            <button onClick={() => handleReadingTime(id, reading_time)} className='text-base text-blue-600 underline'>Mark As Read</button>
        </div>
          
          
            
        </div>
    );
};

export default Blog;