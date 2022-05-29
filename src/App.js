import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemlistContainer from "./Containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
// import { CartProvider } from "./components/Context/CartContext"
=======
import { CartProvider } from "./components/Context/CartContext"
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
import { LoaderProvider } from "./components/Context/LoaderContext";
import ComponenteFooter from "./components/ComponenteFooter";
import Contacto from "./components/Contacto";
import NavBar from './components/NavBar';
import Inicio from "./components/Inicio"
<<<<<<< HEAD
import './App.css';
// import { UserContextProvider } from "./components/Context/UserContext";

=======
// import Cart from "./components/Cart";
import './App.css';
// import { Checkout } from "./components/Checkout";
import { UserContextProvider } from "./components/Context/UserContext";
// import RutaAdmin from "./components/AdminSector/RutaAdmin";
// import AdminPage from "./components/AdminSector/AdminPage";
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266

  function App() {

    return (

<<<<<<< HEAD
      // <UserContextProvider>
        <LoaderProvider>
          {/* <CartProvider > */}
=======
      <UserContextProvider>
        <LoaderProvider>
          <CartProvider >
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
            <BrowserRouter>
              <div className="container-fluid">
                <NavBar />
                <hr />
                <Routes>
                  <Route path="/" exact element={<Inicio />} />
                  <Route path="/productos" element={<ItemlistContainer />} />
                  <Route path="/productos/:catId" element={<ItemlistContainer />} />
                  <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
<<<<<<< HEAD
                  <Route path="/contacto" element={<Contacto />} />
=======
                  {/* <Route path="/cart" element={<Cart />} /> */}
                  {/* <Route path="/checkout" element={<Checkout />} /> */}
                  <Route path="/contacto" element={<Contacto />} />
                  {/* <Route path="/RutaAdmin" element={<RutaAdmin> <AdminPage /> </RutaAdmin>} /> */}
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
                  <Route path="*" element={<h2> 404 . PAGINA NO EXISTENTE</h2>} />
                </Routes>
                <hr />
                <ComponenteFooter />
              </div>
            </BrowserRouter>
<<<<<<< HEAD
          {/* </CartProvider> */}
        </LoaderProvider>
      // </UserContextProvider>
=======
          </CartProvider>
        </LoaderProvider>
      </UserContextProvider>
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
    );
  }

export default App;
