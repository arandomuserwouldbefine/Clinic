import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AdminNavbar from '@/components/admin/Navbar';

export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: ''
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/products/${id}`, product);
            navigate('/admin/manageproducts');
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto max-w-md mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Edit Product</CardTitle>
                    <CardDescription>Edit the details of your product below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                placeholder="Product Name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                placeholder="Product Description"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="price">Price</Label>
                            <Input
                                id="price"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                placeholder="Product Price"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input
                                id="imageUrl"
                                name="imageUrl"
                                value={product.imageUrl}
                                onChange={handleChange}
                                placeholder="Product Image URL"
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Update Product
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}
