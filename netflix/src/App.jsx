import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Netflix from './pages/Netflix';
import Nlogin from './pages/Nlogin';
import Nsignup from './pages/Nsignup'; 
import Player from './pages/Player';
import MoviePage from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from './pages/UserListedMovies';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Nlogin />} />
      <Route exact path="/signup" element={<Nsignup />} />
      <Route exact path="player" element={<Player />} />
      <Route exact path="/movies" element={<MoviePage />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/mylist" element={<UserListedMovies />} />


      <Route exact path="/" element={<Netflix />} />

    </Routes>
    </BrowserRouter>

  )
}

export default App