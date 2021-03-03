import './App.css';

import Row from "./components/Row"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import SearchMovie from "./components/SearchMovie"

import requests from "./api/requests"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">

        <Nav />

        <Switch>

          <Route exact path="/">
            
            <Banner />

            <Row title="ORIGINALS" fetchURL={ requests.fetchOriginals } isLargeRow />
            <Row title="TRENDING NOW" fetchURL={ requests.fetchTrending } />
            <Row title="TOP RATED" fetchURL={ requests.fetchTopRated } />
            <Row title="ACTION MOVIES" fetchURL={ requests.fetchActionMovies } />
            <Row title="COMEDY MOVIES" fetchURL={ requests.fetchComedyMovies } />
            <Row title="HORROR MOVIES" fetchURL={ requests.fetchHorrorMovies } />
            <Row title="ROMANCE MOVIES" fetchURL={ requests.fetchRomanceMovies } />
            <Row title="DOCUMENTARIES" fetchURL={ requests.fetchDocumentaries } />
          </Route>

          <Route path="/searchMovie">
            <SearchMovie />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
