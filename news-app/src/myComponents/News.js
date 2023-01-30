import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    articles = [] 
    constructor(){
        super();
        this.state = {
            total : 0,
            articles : [],
            page:1,
            loading:false
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0a330b3340754f808c51b7292fba57e5&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        this.setState({articles: parsedData.articles})
        this.setState({total:parsedData.totalResults})
    }
    prevHandle = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0a330b3340754f808c51b7292fba57e5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page :  this.state.page - 1,
            articles : parsedData.articles,
            loading:false
        })
    }
    nextHandle = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0a330b3340754f808c51b7292fba57e5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page :  this.state.page + 1,
            articles : parsedData.articles,
            loading:false
        })
    }
  render() {
    return (
      <div className='container my-3' data-bs-theme="dark" style={{background:"#0a0a0a"}}>
        <h2 className='text-center' style={{colour:"black"}}>Top HeadLine regradding {this.props.category}</h2>

        {!this.state.loading ? <>
        <div className='row'>
            {
            this.state.articles.map((e)=>{
                return <div className='col-md-4' key={e.url}>
                <NewsItem Title={!e.title ? "":e.title.slice(0,45)} desc={!e.description ? "" : e.description.slice(0,88)} imgUrl={e.urlToImage} url={e.url}/> 
                </div> 
            })
                
            }
        </div>
        <div className='d-flex justify-content-between'>
            {<button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.prevHandle}>&larr; Previous</button>}
            {this.state.page*this.props.pageSize<this.state.total ? <button type="button" className="btn btn-dark" onClick={this.nextHandle}>Next &rarr;</button> : ""}
        </div>
        </> : <Spinner/>
        }
      </div>
    )
  }
}

export default News
