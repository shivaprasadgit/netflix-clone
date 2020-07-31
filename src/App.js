import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner.js'
import Nav from './Nav.js'
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
    <Row title="NetFlix Originals" fetchUrl={requests.fetchNetflixOrgininals}
    isLargeRow={true}/>
    <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies}/>

    </div>
  );
}

export default App;
