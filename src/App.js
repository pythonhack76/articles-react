import './App.css'
import { BrowserRouter,Routes, Route, NavLink} from 'react-router-dom'

//page compontent

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
      <NavLink exact to = "/">Home</NavLink>
        <NavLink to = "About">About</NavLink>
        <NavLink to = "Contact">Contact</NavLink>
      </nav>
      <Routes>
      <Route exact path="/" element={<Home/>}>
       
        </Route>
        <Route path="/about" element={<About />}>
        
      </Route>
      <Route path="/contact" element={<Contact />}>
        
      </Route> 
      <Route path="/articles/:id" element={<Article />}>

      </Route>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App
