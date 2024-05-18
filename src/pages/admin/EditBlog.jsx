import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminNavbar from '@/components/admin/Navbar';

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/blogs/${id}`);
            setBlog(response.data);
        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/blogs/${id}`, blog);
            navigate('/admin/manageblog');
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto max-w-md mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Edit Blog</CardTitle>
                    <CardDescription>Edit the details of your blog below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={blog.title}
                                onChange={handleChange}
                                placeholder="Blog Title"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={blog.description}
                                onChange={handleChange}
                                placeholder="Blog Description"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input
                                id="imageUrl"
                                name="imageUrl"
                                value={blog.imageUrl}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Update Blog
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}
