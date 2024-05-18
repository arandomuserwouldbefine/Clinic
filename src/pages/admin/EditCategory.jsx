import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminNavbar from '@/components/admin/Navbar';

export default function EditCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: ''
    });

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/categories/${id}`);
            setCategory(response.data);
        } catch (error) {
            console.error("Error fetching category:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/categories/${id}`, category);
            navigate('/admin/managecat');
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto max-w-md mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Edit Category</CardTitle>
                    <CardDescription>Edit the details of your category below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={category.name}
                                onChange={handleChange}
                                placeholder="Category Name"
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Update Category
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}
