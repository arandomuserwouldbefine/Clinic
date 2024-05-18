import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminNavbar from '@/components/admin/Navbar';

export default function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/employees/${id}`);
            setEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employee:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/employees/${id}`, employee);
            navigate('/admin/manageemp');
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    return (
        <AdminNavbar>
            <Card className="mx-auto max-w-md mt-20 mb-20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Edit Employee</CardTitle>
                    <CardDescription>Edit the details of your employee below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                placeholder="Employee Name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                value={employee.email}
                                onChange={handleChange}
                                placeholder="Employee Email"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                value={employee.phone}
                                onChange={handleChange}
                                placeholder="Employee Phone"
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Update Employee
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AdminNavbar>
    );
}
