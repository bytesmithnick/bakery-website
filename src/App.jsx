import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import Booktable from './components/Booktable.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path='/menu' element={<Menu />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/booktable' element={<Booktable />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
