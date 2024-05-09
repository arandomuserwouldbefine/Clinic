import AdminNavbar from '@/components/admin/Navbar';
import React, { useEffect, useState } from 'react';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

function ManageCat() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((resp) => resp.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <AdminNavbar>
            <div style={{ margin: "60px" }}>
                <div className="border rounded-lg w-full">
                    <div className="relative w-full overflow-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {categories.map((category, index) => (
                                    <TableRow key={category.id}>
                                        <TableCell className="font-medium">{category.id}</TableCell>
                                        <TableCell>{category.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AdminNavbar>
    );
}

export default ManageCat;
