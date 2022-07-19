// import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemContainer from './componentes/ItemContainer/ItemContainer';

function App() {
  const styleApp = { padding :'10px 20px' , marginTop : 10}
  return (
    //JSX 
    <div className='container' style={styleApp}>
      <h1 className="App">Flor de Ceramica</h1>
          <NavBar />
      <div className='main-cointeiner'>
        <h1>Productos</h1>
        <ItemContainer />

        </div>
      </div>
    );
}

export default App;
