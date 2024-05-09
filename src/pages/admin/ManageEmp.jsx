import AdminNavbar from '@/components/admin/Navbar'
import DataTable from '@/components/admin/Table'
import React, { useEffect, useState } from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

function ManageEmp() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((resp) => resp.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <AdminNavbar >
        <div style={{ margin: "60px" }}>
          <div className="border rounded-lg w-full">
            <div className="relative w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Employee Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee, index) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </AdminNavbar >
    </div>
  )
}

export default ManageEmp