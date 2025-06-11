import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    }, []);
 
    return (
        <div className="w-8/12">
            {
                blogs.map((blog, idx) => <Blog 
                    key={idx}
                    blog={blog}
                    handleBookMark={handleBookMark}
                    handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;