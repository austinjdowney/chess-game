import Header  from "./components/Header";
function App() {
  return (
    <div className="Container-fluid" style={backgroundStyle}>
      <div className="row justify-content-center">
      <Header />
      </div>
      <div className="row">
        <div className="col-6">
          <button className='btn btn-outline-primary'> PLAY GAME </button>
        </div>
        <div className="col-6">
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
