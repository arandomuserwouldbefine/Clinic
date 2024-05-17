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

function ManageEmp() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:3000/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/employees/${id}`);
            setEmployees(employees.filter(employee => employee.id !== id));
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Manage Employees</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table className="w-full">
                        <TableCaption>A list of your employees.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {employees.map(employee => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.id}</TableCell>
                                    <TableCell>{employee.name}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <Link to={`/editemployee/${employee.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</Link>
                                            <button onClick={() => deleteEmployee(employee.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total Employees: {employees.length}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}

export default ManageEmp;
