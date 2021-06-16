import Header  from "./components/Header";
function App() {
  return (
    <div className="Container-fluid" style={backgroundStyle}>
      <div className="d-flex justify-content-center">
      <Header />

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
