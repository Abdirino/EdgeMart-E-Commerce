import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={ <Home /> }/>
            <Route path="/about"  element={ <About /> }/>
            <Route path="/blog"  element={ <Blog /> }/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
