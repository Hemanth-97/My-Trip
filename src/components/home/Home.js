import React from 'react'

import './Home.css'
export default function Home() {
    return (
        <div>
         <h1>MyTrip</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"> 
            <div className="card" style="width: 18rem;" style={{margin:"10px", padding: "50px"}}>
  <img className="card-img-top" src="Shimla.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Shimla</h5>
    <p className="card-text">*****</p>
  </div>
</div>
            </div>
            <div className="col-sm-4"> 
            <div className="card" style="width: 18rem;" style={{margin:"30px", padding: "50px"}}>
  <img className="card-img-top" src="./paris.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Paris</h5>
    <p className="card-text">*****</p>
  </div>
</div>
            </div>
            <div className="col-sm-4"> 
            <div className="card" style="width: 18rem;" style={{margin:"10px", padding: "50px"}}>
  <img className="card-img-top" src="madkeri.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Madkeri</h5>
    <p className="card-text">*****</p>
  </div>
</div>
            </div>


          </div>

        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"> 
            <div className="card" style="width: 18rem;" style={{margin:"10px", padding: "50px"}}>
  <img className="card-img-top" src="./goa.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Goa</h5>
    <p className="card-text">*****</p>
  </div>
</div>
            </div>
            <div className="col-sm-4"> 
            <div className="card" style="width: 18rem;" style={{margin:"30px", padding: "50px"}}>
  <img className="card-img-top" src="./dubai.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Dubai</h5>
    <p className="card-text">*****</p>
  </div>
</div>
            </div>
            <div className="col-sm-4"> 
            <div className="card" style="width: 18rem;" style={{margin:"10px", padding: "50px"}}>
  <img className="card-img-top" src="./chikka.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Chikkamagalur</h5>
    <p className="card-text">*****</p>
  </div>
</div>
            </div>


          </div>

        </div>
        
        </div>
        
        
    )
}
