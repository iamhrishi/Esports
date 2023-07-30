import React from 'react'


export default function GameCard(props) {
  
  return (
    <div>
       <div>
         <div className={`card text-bg-${props.mode==='light'?'dark':'light'} mb-3`} style={{width: "18rem;"}} >
         <img src={!props.imageUrl?"https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80":props.imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.description}</p>
           <a href={props.url} target='_blank' className="btn btn-primary">Read more</a>
         </div>
       </div>
       </div>
    </div>
  )
}


