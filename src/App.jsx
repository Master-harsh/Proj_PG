import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Pricing from './Components/Pricing.jsx'
import Gallery from './Components/Gallary.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import WhatsAppButton from './Components/WhatsAppButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
      {/* <WhatsAppButton /> */}
      <WhatsAppButton />
    </>
  )
}

export default App
