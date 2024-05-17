import AdminNavbar from '@/components/admin/Navbar';
import React, { useEffect, useState } from 'react';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import axios from 'axios';

function ManageEmp() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/employees/${id}`);
      console.log("Employee deleted successfully:", response.data);
      // Remove the deleted employee from the state
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <AdminNavbar>
        <div style={{ margin: "60px" }}>
          <div className="border rounded-lg w-full">
            <div className="relative w-full overflow-auto">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>ID</TableHeader>
                    <TableHeader>Employee Name</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((employee, index) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>
                        <button onClick={() => deleteEmployee(employee.id)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Delete</button>
                        <a href={`/editemployee/${employee.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </AdminNavbar>
    </div>
  );
}

export default ManageEmp;
