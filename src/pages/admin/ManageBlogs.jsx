import React, { useEffect, useState } from 'react';
import AdminNavbar from '@/components/admin/Navbar';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function ManageBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const deleteHandle = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/blogs/${id}`);
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Manage Blogs</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table className="w-full">
                        <TableCaption>A list of your blogs.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {blogs.map(blog => (
                                <TableRow key={blog.id}>
                                    <TableCell className="font-medium">{blog.id}</TableCell>
                                    <TableCell>{blog.title}</TableCell>
                                    <TableCell>{blog.description}</TableCell>
                                    <TableCell>
                                        <Link to={`/editblog/${blog.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</Link>
                                        <button onClick={() => deleteHandle(blog.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total Blogs: {blogs.length}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}

export default ManageBlogs;
