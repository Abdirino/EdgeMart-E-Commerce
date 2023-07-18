import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={ <Home /> }/>
            <Route path="/about"  element={ <About /> }/>
            <Route path="/blog"  element={ <Blog /> }/>
            <Route path="/contact"  element={ <Contact /> }/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
