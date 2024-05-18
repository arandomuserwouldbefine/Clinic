import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/blogs/${id}`)
            .then((resp) => resp.json())
            .then((data) => setBlog(data))
            .catch((error) => console.error('Error fetching blog:', error));
    }, [id]);

    if (!blog) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto" />

            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-lg mb-4">{blog.description}</p>
        </div>
    );
}

export default ViewBlog;
