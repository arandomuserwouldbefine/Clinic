import AdminNavbar from '@/components/admin/Navbar'
import DataTable from '@/components/admin/Table'
import React, { useEffect, useState } from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

function ManageContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((resp) => resp.json())
      .then((data) => setContacts(data));
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
                  {contacts.map((contact, index) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">{contact.id}</TableCell>
                      <TableCell>{contact.firstName}</TableCell>
                      <TableCell>{contact.lastName}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.message}</TableCell>
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

export default ManageContact