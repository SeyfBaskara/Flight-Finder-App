import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchFlightProvider from './context/SearchFlightContext'
//pages
import Home from './pages/Home'
import Booking from './pages/Booking'

//components
import Header from './components/Header'

function App() {
   return (
      <SearchFlightProvider>
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
      </SearchFlightProvider>
   )
}

export default App
