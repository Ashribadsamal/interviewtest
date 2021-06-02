import React from 'react'
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.css'
import Services from './component/Services';
import Footer from './component/Footer';
import News from './component/News';
import Nav from './component/Nav';
import Body from './component/Body';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Home/>
    <Services/>
    <Body/>
    {/* <Project/> */}
    <News/>
    <Footer/>
    </div>
  );
}

export default App;
