import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import Mainpage from './components/Mainpage.jsx';
import Footer from './components/Footer.jsx';
import Blog from './components/Blog.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Mainpage />}></Route>
            <Route exact path='/menu' element={<Menu />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/blog' element={<Blog/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
