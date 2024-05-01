import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/Home'
import Contact from './pages/user/Contact'
import Services from './pages/user/Services'
import About from './pages/user/About'
import Login from './pages/user/Login'

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

        {/* Admin Routes */}

      </Routes>
    </>
  )
}

export default App
