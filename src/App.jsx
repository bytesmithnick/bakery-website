import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import Booktable from './components/Booktable.jsx'
import Mainpage from './components/Mainpage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Mainpage />}></Route>
            <Route exact path='/menu' element={<Menu />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/booktable' element={<Booktable />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
