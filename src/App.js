import React from "react";
import Header  from "./components/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Container" style={backgroundStyle}>
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <Header />
        </div>
       <div className="col-12 d-flex justify-content-center">
          <Link to="../pages/GameDetailsPage">
            {/* Link to Game Details/Setup Page */}
            <button className='btn btn-outline-light btn-XL'> PLAY GAME </button>
          </Link>
       </div>
      </div>
    </div>
  )
  }
  const backgroundStyle={
    backgroundColor: '#6b6b6b',
backgroundImage: "url('https://www.transparenttextures.com/patterns/black-orchid.png')",
height: '100vh',
  }
export default App;
