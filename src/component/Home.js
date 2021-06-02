import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
        <div className="image mt-4">
            <div className="heading">
                WELCOME TO <br/>AGRICULTURE FORM
                <button className="btn btn-warning">Discover More</button> 
            </div>    
        </div>
        <div className="heading2">
            <div className="container mt-2">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="row">
                            <div className=" imgcontainer col-md-4 col-10 mx-auto ">
                                
                                <div className="img1"></div>
                                <div className="img2"></div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto ">
                                <div className="box2">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button className="btn btn-warning">show</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
