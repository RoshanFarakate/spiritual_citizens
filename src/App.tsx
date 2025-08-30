
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
