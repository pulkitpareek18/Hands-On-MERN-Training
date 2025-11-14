import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
// import NewsCard from './components/NewsCard'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (

    <>
    <Navbar /> 

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
    
    <Footer /> 
    </>
  )
}

export default App
