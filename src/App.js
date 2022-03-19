import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
}

export default App;