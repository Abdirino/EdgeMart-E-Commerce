import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Page from "./Pages/Page";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
