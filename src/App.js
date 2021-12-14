import './App.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'

//page compontent

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
      </nav>
      <Routes>
      <Route exact path="/" element={<Home/>}>
       
        </Route>
        <Route path="/about" element={<About />}>
        
      </Route>
      <Route path="/contact" element={<Contact />}>
        
      </Route> 
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App
