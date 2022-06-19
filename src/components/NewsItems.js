import React, { Component } from 'react'
import altimage from './index.jpg'
export default class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, Author, Source, date } = this.props
        return (
            <div>
                <div className="card bg-dark text-light mx-3 my-3">
                    <img src={!imageUrl ? altimage : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body bg-dark text-light">
                        <div className="card-header text-light text-center" style={{backgroundColor:'#424141'}}>
                            <strong className=" me-auto" style={{ fontSize: "20px"}}>{Source}</strong>
                        </div>

                        <h3 className="card-title bg-dark text-light" style={{ paddingTop: "10px" }}>{title}. . .</h3>
                        <p className="card-text bg-dark text-light">{description}. . .</p>
                        <p className='text-muted'>Brought to you by -<strong> {Author}</strong> on {new Date(date).toLocaleString()}</p>
                        <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-success">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
