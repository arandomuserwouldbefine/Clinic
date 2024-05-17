import AdminNavbar from '@/components/admin/Navbar'
import DataTable from '@/components/admin/Table'
import React, { useEffect, useState } from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

function ManageProducts() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((data) => setServices(data));
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
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service, index) => (
                    <TableRow key={service.id}>
                      <TableCell className="font-medium">{service.id}</TableCell>
                      <TableCell>{service.title}</TableCell>
                      <TableCell>{service.description.slice(0,12)+"..."}</TableCell>
                      <TableCell>{service.price}$</TableCell>
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

export default ManageProducts