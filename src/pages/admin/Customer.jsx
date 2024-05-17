import React, { useEffect, useState } from 'react';
import AdminNavbar from '@/components/admin/Navbar';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from "@/components/ui/table";

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <AdminNavbar>
            <div style={{ margin: "60px" }}>
                <div className="border rounded-lg w-full">
                    <div className="relative w-full overflow-auto">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>ID</TableHeader>
                                    <TableHeader>Username</TableHeader>
                                    <TableHeader>Email</TableHeader>
                                    <TableHeader>Phone</TableHeader>
                                    <TableHeader>Password</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.id}</TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell>{user.password}</TableCell>
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

export default UserTable;
