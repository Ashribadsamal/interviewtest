import React,{useState} from 'react'
import data from "./card"

function Services() {
    console.log(data)
 
    return (
        <div>
            <div className="service  col-6 offset-3 offset-3">
              <h3>SERVICES WE OFFER</h3>
            </div>
            <div className="container cards1">
                <div className="row">
                    {data.cards.map((item)=>(
                        
                        <div className="col-10 col-md-3 mx-auto">
                        <div className="card">
                            
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                
                            </div>
                            <img className="card-img-top" src={item.image} alt="Card image cap"/>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Services
