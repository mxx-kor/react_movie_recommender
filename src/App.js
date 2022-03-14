import React from "react";
import axios from "axios";
import Movie from "./Movies";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading: false});
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return <section className="container">{isLoading 
      ? (<div className="loader"><span className="loader__text">Loading...</span></div>) : movies.map(movie => (
      <div key={movie.id} className="movies"><Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} /></div>
    ))}</section>
  }
}

export default App;
