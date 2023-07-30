import React, { Component } from 'react'
import GameCard from './GameCard'

export default class GameNews extends Component {
    constructor(){
        super();
        this.state = {
          articles: [],
          loading:false
        }
      }
    
      async componentDidMount(){
        let url="https://newsapi.org/v2/everything?q=games&apiKey=ca21f23325854f2cbfa1537951d4c3ce";
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({articles: parsedData.articles})
      }
      
      render() {
        let {mode} = this.props;
       
        return (
          <div>
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
                return <div className="col-md-4" key={element.url}>
                <GameCard title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}
            </div>   
       </div>
          </div>
        )
      }
}
