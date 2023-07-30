import React, { Component } from 'react'
import GameCard from './GameCard'

export default class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading:false,
      page:1,

    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=esports&apiKey=ca21f23325854f2cbfa1537951d4c3ce&pageSize=20";
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async()=>{
    let url=`https://newsapi.org/v2/everything?q=esports&apiKey=ca21f23325854f2cbfa1537951d4c3ce&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      }) 
  }
  handleNextClick = async ()=>{
    let url=`https://newsapi.org/v2/everything?q=esports&apiKey=ca21f23325854f2cbfa1537951d4c3ce&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      }) 
  }
  state = {
    isActive:false
  }

  render() {
    let {mode} = this.props;
    return (
        <div className='container my-3'>
        <h1 className={`text-${mode==='light'?'dark':'light'}`}>Top headlines</h1>
        <div className="container-fluid p-3 w-50 px-2" data-bs-theme={`${mode}`}>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className="row">
        {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
            <GameCard title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className={`btn btn-${mode}`} onClick={this.handlePrevClick}>Previous</button>
            <button type="button" className={`btn btn-${mode}`} onClick={this.handleNextClick}>Next</button>
            </div>
        </div>
    )
  }
}

