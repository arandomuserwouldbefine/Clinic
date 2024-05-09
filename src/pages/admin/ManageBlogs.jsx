import AdminNavbar from '@/components/admin/Navbar'
import DataTable from '@/components/admin/Table'
import React, { useEffect, useState } from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((resp) => resp.json())
      .then((data) => setBlogs(data));
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
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.map((blog, index) => (
                    <TableRow key={blog.id}>
                      <TableCell className="font-medium">{blog.id}</TableCell>
                      <TableCell>{blog.title}</TableCell>
                      <TableCell>{blog.description.slice(0,20)+"..."}</TableCell>
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

export default ManageBlogs