import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Footer } from "@/components/user/Footer";
import Navbar from "@/components/user/Navbar";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setBlogs(data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blogs</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Read our latest blogs and stay updated.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <img src={blog.imageUrl} alt={blog.title} />
                                    <CardTitle>{blog.title}</CardTitle>
                                    <CardDescription>{blog.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link to={`/viewblog/${blog.id}`} className="w-full">
                                        <Button className="w-full">View Blog</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
