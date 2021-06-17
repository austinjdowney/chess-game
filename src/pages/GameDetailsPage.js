import React from "react";
import { Link } from "react-router-dom";

function GameDetailsPage(){
  return(
    <div className="container-fluid">

      <div className="row justify-content-center">
        <div className="col-6">
          <Link to="">
            {/* Link to GamePage */}
          <button className='btn btn-outline-light'> <i className="fas fa-chess-king-alt"></i> </button>
          
          </Link>
        </div>
        <div className="col-6">
          <Link to="">
            {/* Link to GamePage */}
          <button className='btn btn-outline-dark'> <i className="fas fa-chess-king"></i> </button>
          
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GameDetailsPage;