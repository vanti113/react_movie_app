import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//내가 이해 못하는 것.
// 스테이트, 프롭스,

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getmovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // 컴포넌트가 생성이 되면 바로 실행되는 함수.
    this.getmovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres.slice(0, 3)}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
