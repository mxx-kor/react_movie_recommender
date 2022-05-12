import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import LikedMovies from "../routes/Liked";

function App() {
  return <Router>
    <Routes>
      <Route exact path="/react_movie_recommender/" element={<Home />} />
      <Route path="/react_movie_recommender/:id" element={<Detail />} />
      <Route path="/react_movie_recommender/liked" element={<LikedMovies />} />
    </Routes>
  </Router>
}

export default App;