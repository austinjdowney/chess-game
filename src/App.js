import Header  from "./components/Header";
function App() {
  return (
    <div className="Container-fluid" style={backgroundStyle}>
      <div>
      <Header />

      </div>
    </div>
  )
  }
  const backgroundStyle={
    backgroundColor: '#6b6b6b',
backgroundImage: "url('https://www.transparenttextures.com/patterns/black-orchid.png')",
  }
export default App;
