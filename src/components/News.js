import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string,
      }
      static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general',
      }
    constructor() {
        super();
        // console.log('Hello world')
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be34fb63cde94cd6a1be08b6c33faf0a&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })
    }
    
    
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be34fb63cde94cd6a1be08b6c33faf0a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading:false 
        })
    }
    
    handleNextClick = async () => {
        if (!(this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.setState({loading:true})
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be34fb63cde94cd6a1be08b6c33faf0a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading:false
            })
        }
        
    }
    
    render() {
    return (
        <div className='container my-3'>
            <h2><strong>UpToDate--</strong>Latest Headlines</h2>
             {this.state.loading && <Spinner/>}
            <div className='row my-3'>
                {!this.state.loading && this.state.articles.map((ele) => {
                    return <div className='col-md-4 my-2' key={ele.url}>
                        <NewsItems  newsUrl={ele.url} title={ele.title.length >= 50 ? ele.title.slice(0, 45) : ele.title} description={ele.description ? ele.description.slice(0, 80) : ""} imageUrl={ele.urlToImage} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <div disabled={this.state.page>=1} className="btn btn-dark mb-3" onClick={this.handlePrevClick}>&larr; Previous</div>
                <div disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark mb-3" onClick={this.handleNextClick}>Next &rarr;</div>
            </div>
        </div>
    )
}
}

export default News
