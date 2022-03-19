import './App.css';
import backGround from './bg.jpg'
import React, { Component } from 'react'
import Nav1 from './components/Nav1';
import News from './components/News';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div
        class="bg_image"
        style={{
          backgroundImage: 'url(' + backGround + ')',
          backgroundSize: "cover",
          color: "#f5f5f5",
          marginBottom: '-50px'
        }}
      >
        <Router>
          <Nav1 />
          <Routes>
            <Route path='/' element={<News pageSize={5} country='us' category='general'/>} />    
            <Route path='/business' element={<News pageSize={5} country='us' category='business'/>} />

            <Route path='/entertainment' element={<News pageSize={5} country='us' category='entertainment'/>} />
            <Route path='/health' element={<News pageSize={5} country='us' category='health'/>} />

            <Route path='/science' element={<News pageSize={5} country='us' category='science'/>} />
            <Route path='/sports' element={<News pageSize={5} country='us' category='sports'/>} />

            <Route path='/technology' element={<News pageSize={5} country='us' category='technology'/>} />
          </Routes>
          <div className="container-fluid bg-dark text-light d-flex" style={{ height: '8vh', justifyContent: 'center', paddingTop: '20px' }}>
            Copyright © 2022 <strong>UpToDate</strong> Inc. All rights reserved.
          </div>
        </Router>
      </div>
    )
  }
}

