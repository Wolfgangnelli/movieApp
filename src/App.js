import React, { Component } from "react";
import "./main.css";
import MoviList from "./components/MoviList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const APIKEY = "6d25fa48";
const APIURL = "https://www.omdbapi.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalCount: 0,
    };
  }

  searchMovies = (term = "") => {
    if (term.length < 3) {
      return;
    }
    this.fetchMovies(term).then((res) => {
      this.setState({
        movies: res.Search,
        totalCount: res.totalResults,
      });
    });
  };

  fetchMovies = (search) => {
    return fetch(APIURL + "?apikey=" + APIKEY + "&s=" + search).then((res) =>
      res.json()
    );
  };

  componentDidMount = () => {
    this.searchMovies("back to the future");
  };

  render() {
    return (
      <div className="App">
        <header className="bg-cards p-2 w-full fixed top-0">
          <h1 className="text-2xl text-red-500 px-4 pb-2 pt-1 font-extrabold">
            New My movies App
          </h1>
          <NavBar onSearchTerm={this.searchMovies} />
        </header>
        <section className="dioSanto min-h-screen">
          <MoviList movies={this.state.movies} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
