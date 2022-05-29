import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemlistContainer from "./Containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { CartProvider } from "./components/Context/CartContext"
import { LoaderProvider } from "./components/Context/LoaderContext";
import ComponenteFooter from "./components/ComponenteFooter";
import Contacto from "./components/Contacto";
import NavBar from './components/NavBar';
import Inicio from "./components/Inicio"
import './App.css';
// import { UserContextProvider } from "./components/Context/UserContext";


  function App() {

    return (

      // <UserContextProvider>
        <LoaderProvider>
          {/* <CartProvider > */}
            <BrowserRouter>
              <div className="container-fluid">
                <NavBar />
                <hr />
                <Routes>
                  <Route path="/" exact element={<Inicio />} />
                  <Route path="/productos" element={<ItemlistContainer />} />
                  <Route path="/productos/:catId" element={<ItemlistContainer />} />
                  <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="*" element={<h2> 404 . PAGINA NO EXISTENTE</h2>} />
                </Routes>
                <hr />
                <ComponenteFooter />
              </div>
            </BrowserRouter>
          {/* </CartProvider> */}
        </LoaderProvider>
      // </UserContextProvider>
    );
  }

export default App;
