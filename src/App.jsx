import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'

import {Home ,About , Team, Event} from './pages'; 
import {Nav , Foo} from './layout'
import './App.css' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Nav/>
    <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route> 
   </Routes>
  <Foo />
</Router>
  
  )
}

export default App
