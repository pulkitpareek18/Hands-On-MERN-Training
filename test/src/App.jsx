import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import News from './pages/News.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/news' element={<News />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
