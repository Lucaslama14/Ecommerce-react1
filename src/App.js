// import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    //JSX 
    <div className='container'>
          <NavBar />
      <section className='main-cointeiner'>
        <ItemListContainer />
        </section>
      </div>
    );
}

export default App;
