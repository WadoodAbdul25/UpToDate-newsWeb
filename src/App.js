import './App.css';
import backGround from './bg.jpg'
import React, { Component } from 'react'
import Nav1 from './components/Nav1';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize = 10;
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
            <Route path='/' element={<News key="general" pageSize={this.pageSize} country='us' category='general'/>} />    
            <Route path='/business' element={<News key="business" pageSize={this.pageSize} country='us' category='business'/>} />

            <Route path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country='us' category='entertainment'/>} />
            <Route path='/health' element={<News key="health" pageSize={this.pageSize} country='us' category='health'/>} />

            <Route path='/science' element={<News key="science" pageSize={this.pageSize} country='us' category='science'/>} />
            <Route path='/sports' element={<News key="sports" pageSize={this.pageSize} country='us' category='sports'/>} />

            <Route path='/technology' element={<News key="technology" pageSize={this.pageSize} country='us' category='technology'/>} />
          </Routes>
          <div className="container-fluid bg-primary text-light d-flex" style={{ height: '8vh', justifyContent: 'center', paddingTop: '20px' }}>
            Copyright © 2022 <strong>UpToDate</strong> Inc. All rights reserved.
          </div>
        </Router>
      </div>
    )
  }
}

