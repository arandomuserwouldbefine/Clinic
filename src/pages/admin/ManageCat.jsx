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

function ManageCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3000/categories');
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const deleteHandle = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/categories/${id}`);
            setCategories(categories.filter(category => category.id !== id));
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Manage Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table className="w-full">
                        <TableCaption>A list of your categories.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map(category => (
                                <TableRow key={category.id}>
                                    <TableCell className="font-medium">{category.id}</TableCell>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>
                                        <Link to={`/editcategory/${category.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</Link>
                                        <button onClick={() => deleteHandle(category.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}>Total Categories: {categories.length}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}

export default ManageCategories;
