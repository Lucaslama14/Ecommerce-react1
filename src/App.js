// import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemContainer from './componentes/ItemContainer/ItemContainer';


function App() {
  return (
    //JSX 
    <div className='container' >
      <NavBar />
      <div className='main-cointeiner'>
        <ItemContainer />

        </div>
      </div>
    );
}

export default App;
