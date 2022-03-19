import React, { Component } from 'react'
import altimage from './index.jpg'
export default class NewsItems extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <div>
                <div className="card bg-dark text-light mx-3 my-3">
                    <img src={!imageUrl?altimage:imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body bg-dark text-light">
                            <h5 className="card-title bg-dark text-light">{title}</h5>                        
                            <p className="card-text bg-dark text-light">{description} . . .</p>
                            <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-success">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}
