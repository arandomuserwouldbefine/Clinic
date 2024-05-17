import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/Home'
import Contact from './pages/user/Contact'
import Services from './pages/user/Services'
import About from './pages/user/About'
import Login from './pages/user/Login'
import AdminLogin from './pages/admin/Login'
import AdminHome from './pages/admin/Home'
import ManageContact from './pages/admin/Contact'
import ManageServices from './pages/admin/Services'
import Register from './pages/user/Register'
import ManageBlogs from './pages/admin/ManageBlogs'
import AddBlog from './pages/admin/AddBlog'
import AddServices from './pages/admin/AddServices'
import AddEmp from './pages/admin/AddEmp'
import ManageEmp from './pages/admin/ManageEmp'
import AddCat from './pages/admin/AddCat'
import ManageCat from './pages/admin/ManageCat'
import AddProducts from './pages/admin/AddServices'
import ManageProducts from './pages/admin/ManageServices'
import UserTable from './pages/admin/Customer'

function App() {

  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/customers" element={<UserTable />} />
        <Route path="/admin/dashboard" element={<AdminHome />} />
        <Route path="/admin/contacts" element={<ManageContact />} />
        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/admin/manageblog" element={<ManageBlogs />} />
        <Route path="/admin/manageproducts" element={<ManageProducts />} />
        <Route path="/admin/addblog" element={<AddBlog />} />
        <Route path="/admin/addproducts" element={<AddProducts />} />
        <Route path="/admin/addemp" element={<AddEmp />} />
        <Route path="/admin/manageemp" element={<ManageEmp />} />
        <Route path="/admin/addcat" element={<AddCat />} />
        <Route path="/admin/managecat" element={<ManageCat />} />
      </Routes>
    </>
  )
}

export default App
