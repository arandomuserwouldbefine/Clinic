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

function App() {

  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminHome />} />
        <Route path="/admin/contacts" element={<ManageContact />} />
        <Route path="/admin/services" element={<ManageServices />} />
      </Routes>
    </>
  )
}

export default App
