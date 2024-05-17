import React, { useState } from 'react';
import AdminNavbar from '@/components/admin/Navbar';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';

function AddCategories() {
  const [categoryName, setCategoryName] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const newCategory = {
        name: categoryName,
        dateTime: new Date().toString()
      };
      const res = await axios.post(`http://localhost:3000/categories`, newCategory);
      setCategoryName("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <AdminNavbar>
      <Card className="mx-auto mt-20 mb-20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Add Category</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandle}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="categoryName">Category Name</Label>
                <Input id="categoryName" name="categoryName" value={categoryName} onChange={handleNameChange} placeholder="Enter category name" required type="text" />
              </div>
              <Button className="w-full" type="submit">
                Add Category
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminNavbar>
  );
}

export default AddCategories;
