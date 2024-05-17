import React, { useState } from 'react';
import AdminNavbar from '@/components/admin/Navbar';
import axios from 'axios';
import { Input } from '@/components/ui/input';

function AddEmp() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/employees', employeeData);
      console.log('Employee added successfully:', response.data);
      setEmployeeData({ name: '' });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <AdminNavbar>
      <div className="mx-auto mt-20 mb-20">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <label htmlFor="name">Name:</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={employeeData.name}
              placeholder="Enter name"
              onChange={handleChange}
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Employee</button>
          </div>
        </form>
      </div>
    </AdminNavbar>
  );
}

export default AddEmp;
