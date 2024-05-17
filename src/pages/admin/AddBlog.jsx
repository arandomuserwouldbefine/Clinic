import React, { useState } from 'react';
import AdminNavbar from '@/components/admin/Navbar';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';

function AddBlog() {
    const [blogData, setBlogData] = useState({
        title: "",
        description: "",
        imageUrl: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/blogs', blogData);
            console.log(response.data); // Log the response for debugging
            // Clear the form after successful submission
            setBlogData({ title: "", description: "", imageUrl: "" });
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Add Blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="title" className="block">Title</label>
                                <Input id="title" name="title" value={blogData.title} onChange={handleChange} placeholder="Enter title" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="description" className="block">Description</label>
                                <Input id="description" name="description" value={blogData.description} onChange={handleChange} placeholder="Enter description" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="imageUrl" className="block">Image URL</label>
                                <Input id="imageUrl" name="imageUrl" value={blogData.imageUrl} onChange={handleChange} placeholder="Enter image URL" required />
                            </div>
                            <Button type="submit" className="w-full">Add Blog</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}

export default AddBlog;
