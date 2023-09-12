import React from 'react'
import {HashRouter as BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home'
import VodInput from './components/vodInput'
import Footer from './components/footer'
import './App.css';
import MovieInfo from './components/movieInfo'
function App() {
  return (
    <BrowserRouter>
    <VodInput/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/info/:id' element={<MovieInfo/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
