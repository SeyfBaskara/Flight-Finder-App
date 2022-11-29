import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Booking from './pages/Booking'

//components
import Header from './components/Header'

function App() {
   return (
      <Router>
         <main className="app">
            <Header />
            <Routes>
               <>
                  <Route path="/" element={<Home />} />
                  <Route path="/booking" element={<Booking />} />
               </>
            </Routes>
         </main>
      </Router>
   )
}

export default App
