import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";

const Home = () => {
    return(
        <div className="container" >
            <section className='main-container'>
            <ItemListContainer section="Productos en oferta"/>
            </section>
        </div>
    )
}

export default Home