import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Movies from './components/Movies'
import Nav from './components/Nav'
import Footer from './components/Footer'
import TvShow from './components/TvShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <div className='conts'>
        <div className='mv'>
        <Movies />
        </div>
        <div className='tvs'>
          <TvShow/>
        </div>
      
      </div>

      <Footer />
    </div>
  )
}

export default App
