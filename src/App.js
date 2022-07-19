// import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  const styleApp = { padding: '10px 20px', margintop : 10}
  return (
    //JSX 
    <div className="App" style={styleApp} >
      <NavBar />
      <h1>Flor de Ceramica</h1>
    </div>
  );
}

export default App;
