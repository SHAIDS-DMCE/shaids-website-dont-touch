import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'

import {Home ,About , Team, Event} from './pages'; 
import {Nav , Foo} from './layout'
import './App.css' 
import './cursor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Nav/>
    <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route> 
          <Route exact path='/team' element={< Team />}></Route> 
          <Route exact path='/Event' element={< Event />}></Route> 

   </Routes>
  <Foo />
</Router>
  
  )
}

export default App
