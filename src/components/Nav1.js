import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Comp1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:'9vh'}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><strong>UpToDate</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link active" to="/general">general</Link>
                <Link className="nav-link" to="/business"> business</Link>
                <Link className="nav-link" to="/entertainment">entertainment</Link>
                <Link className="nav-link" to="/health">health</Link>
                <Link className="nav-link" to="/science">science</Link>
                <Link className="nav-link" to="/technology">technology</Link>
                <Link className="nav-link" to="/sports">sports</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
