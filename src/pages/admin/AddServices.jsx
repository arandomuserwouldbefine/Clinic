import React, { useState, useEffect } from 'react';
import AdminNavbar from '@/components/admin/Navbar';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';

function AddProducts() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
    category: ""
  });
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

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/products`, product);
      console.log(res.data); // Log the response for debugging
      // Reset the form after successful submission
      setProduct({ title: "", description: "", price: "", imageURL: "", category: "" });
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <AdminNavbar>
      <Card className="mx-auto mt-20 mb-20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Add Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandle}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" value={product.title} onChange={handleChange} placeholder="Product title" required type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" value={product.description} onChange={handleChange} placeholder="Product description" required type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" value={product.price} onChange={handleChange} placeholder="Product price" required type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageURL">Image URL</Label>
                <Input id="imageURL" name="imageURL" value={product.imageURL} onChange={handleChange} placeholder="Image URL" required type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select id="category" name="category" value={product.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
              <Button className="w-full" type="submit">
                Add Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminNavbar>
  );
}

export default AddProducts;
