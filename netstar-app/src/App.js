import './App.css';

import Row from "./components/Row"

import requests from "./api/requests"

function App() {
  return (
    <div className="app">
      <Row title="ORIGINALS" fetchURL={ requests.fetchOriginals } isLargeRow />
      <Row title="TRENDING NOW" fetchURL={ requests.fetchTrending } />
      <Row title="TOP RATED" fetchURL={ requests.fetchTopRated } />
      <Row title="ACTION MOVIES" fetchURL={ requests.fetchActionMovies } />
      <Row title="COMEDY MOVIES" fetchURL={ requests.fetchComedyMovies } />
      <Row title="HORROR MOVIES" fetchURL={ requests.fetchHorrorMovies } />
      <Row title="ROMANCE MOVIES" fetchURL={ requests.fetchRomanceMovies } />
      <Row title="DOCUMENTARIES" fetchURL={ requests.fetchDocumentaries } />
    </div>
  );
}

export default App;
