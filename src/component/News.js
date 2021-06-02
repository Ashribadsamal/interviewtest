import React from 'react'
import data from './card'

function News() {
    return (
        <div className="mb-5">
         <div className="service mb-5 border mt-3 col-6 offset-3 offset-3">
           <h3>NEWS & ARTICLE</h3>

         </div>
            <div className="container">
                <div className="row">
                    {data.cards.map(item=>(
                        <div className="col-10 col-md-3 mx-auto">
                        <div class="card">
                        <img class="card-img-top" src={item.image} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.description}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            
                        </div>
                    </div>
                    ))} 
                </div>
                
            </div>
            

        </div>
    )
}

export default News
