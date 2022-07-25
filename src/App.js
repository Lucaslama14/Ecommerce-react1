// import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemContainer from './componentes/ItemContainer/ItemContainer';

function App() {
  return (
    //JSX 
    <div className='container'>
          <NavBar />
      <section className='main-cointeiner'>
        <ItemContainer />
        </section>
      </div>
    );
}

export default App;
