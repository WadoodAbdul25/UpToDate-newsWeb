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
      capitalizeFirstLetter = (string) =>{
           let arr=string[0].toUpperCase;
           string.replace(string[0],arr)
      }
    constructor(props) {
        super(props);
        // console.log('Hello world')
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.props.category} - NewsMonkey`
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be34fb63cde94cd6a1be08b6c33faf0a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false 
        })
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
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be34fb63cde94cd6a1be08b6c33faf0a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading:false 
        // })
        this.setState({page: this.state.page-1});
        this.updateNews();
    }
    
    handleNextClick = async () => {
        // if (!(this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     this.setState({loading:true})
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be34fb63cde94cd6a1be08b6c33faf0a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading:false
        //     })
        // }
        this.setState({page: this.state.page+1})
        this.updateNews();
        
    }
    
    render() {
    return (
        <div className='container my-3'>
            <h2><strong>UpToDate--</strong>Latest Headlines from <strong>{this.props.category}</strong> Section</h2>
             {this.state.loading && <Spinner/>}
            <div className='row my-3'>
                {!this.state.loading && this.state.articles.map((ele) => {
                    return <div className='col-md-4 my-2' key={ele.url}>
                        <NewsItems Source={ele.source.name} date={ele.publishedAt}  newsUrl={ele.url} title={ele.title.length >= 50 ? ele.title.slice(0, 45) : ele.title} description={ele.description ? ele.description.slice(0, 80) : ""} imageUrl={ele.urlToImage}  Author={ele.author === null? " NO AUTHOR MENTIONED ": ele.author}/>
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
