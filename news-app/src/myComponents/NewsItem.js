import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {Title,desc,imgUrl,url} = this.props;
    return (
        
      <div>
        <div className="card my-3 bg-dark" >
            <img src={imgUrl} className="card-img-top" alt=""/>
            <div className="card-body" style={{color:"white"}}>
                <h5 className="card-title">{Title}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
