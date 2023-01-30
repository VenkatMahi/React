
import './App.css';
import Navbar from './myComponents/Navbar';
import React, { Component } from 'react'
import News from './myComponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
export default class App extends Component {
  render() {

    return (
      <div style={{background:"#0a0a0a"}}>
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<News key='general' pageSize={6} category='general'/>}></Route>
              <Route path='/business' element={<News key='business' pageSize={6} category='business'/>}></Route>
              <Route path='/entertainment' element={<News key='entertainment' pageSize={6} category='entertainment'/>}></Route>
              <Route path='/health' element={<News key='health' pageSize={6} category='health' />}></Route>
              <Route path='/science' element={<News key='science' pageSize={6} category='science'/>}></Route>
              <Route path='/sports' element={<News key='sports' pageSize={6} category='sports' />}></Route>
              <Route path='/technology' element={<News key='technology' pageSize={6} category='technology' />}></Route>
            </Routes>
          </Router>
        </div>
      
    )
  }
}
