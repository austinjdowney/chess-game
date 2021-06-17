import React from "react";
import Header  from "../components/Header";
import { Link } from "react-router-dom";

function HomePage(){
  return(
    <div className="container-fluid">

      <div className="row justify-content-center">
        <Header />
      </div>
      <div className="row">
        <div className="col-6">
          <button className='btn btn-outline-light'> PLAY GAME </button>
        </div>
        <div className="col-6">
        </div>
      </div>
    </div>
  )
}

export default HomePage;