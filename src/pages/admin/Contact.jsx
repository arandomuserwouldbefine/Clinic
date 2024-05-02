import AdminNavbar from '@/components/admin/Navbar'
import DataTable from '@/components/admin/Table'
import React from 'react'

function ManageContact() {
  return (
    <div>
      <AdminNavbar />
      <div className='flex items-center justify-center mt-10'>
        <DataTable />
      </div>
    </div>
  )
}

export default ManageContact