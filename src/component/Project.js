import React from 'react'
import data from './card'

function Project() {
    return (
        <div>
          <div className="service mb-5 border mt-3 col-6 offset-3 offset-3">
              <h3> OUR PROJECT</h3>
          </div>
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="container">
                    <div className="row">
                        {data.cardsone.map(item=>(
                            <div className="col-10 col-md-4 mx-auto">
                            <div class="card">
                            <img class="card-img-top" src={item.image} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.description}</p>
                                </div>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                 </div>
                    {/* <div className="pro2">
                    hii   
                    </div> */}
                    
                </div>
                <div>
                <div className="heading">
                WELCOME TO <br/>AGRICULTURE FORM
                <button className="btn btn-warning">Discover More</button> 
            </div>
                </div>

            </div>
        </div>
    )
}

export default Project
