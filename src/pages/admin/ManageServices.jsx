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

function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteHandle = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <AdminNavbar>
      <Card className="mx-auto mt-20 mb-20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Manage Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map(product => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Link to={`/editproduct/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</Link>
                    <button onClick={() => deleteHandle(product.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total Products: {products.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </AdminNavbar>
  );
}

export default ManageProducts;
