import React from 'react';
import logoNav from "../img/LOGO.png";
<<<<<<< HEAD
import { Nav, Navbar, NavDropdown, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";
import "../Css/NavBar.css";


const NavComponent = () => {

=======
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";
// import { useContext } from 'react';
// import { UserContext } from './Context/UserContext';
// import ModalLogin from './ModalLogin';

const NavComponent = () => {

  // const { logged, logout } = useContext(UserContext)

>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
  return (

    <header className="App-header">
      <Link to="/"><img src={logoHeader} className="logoHeader col-6" alt="logoHeader" /></Link>
      <Navbar expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logoNav} className="logoNav" alt="logoNav" /> {' '}
        </Navbar.Brand>
<<<<<<< HEAD
        <Nav className="navOptiones">
          {/* <NavLink className="dropdown-item" to="/productos/">PRODUCTOS</NavLink> */}
          <Button className="dropdown-basic-button" href="/" title="INICIO">INICIO</Button>
          <DropdownButton id="dropdown-basic-button" title="IMPRESION">
            <Dropdown.Item href="/productos/IMPRESORAS">IMPRESORAS</Dropdown.Item>
            <Dropdown.Item href="/productos/TONERS">TONERS</Dropdown.Item>
            <Dropdown.Item href="/productos/CARTUCHOS EPSON">CARTUCHOS EPSON</Dropdown.Item>
            <Dropdown.Item href="/productos/CARTUCHOS HP">CARTUCHOS HP</Dropdown.Item>
            <Dropdown.Item href="/productos/CARTUCHOS ALTERNATIVOS">CARTUCHOS ALTERNATIVOS</Dropdown.Item>
            <Dropdown.Item href="/productos/BOTELLAS TINTA">BOTELLAS DE TINTA</Dropdown.Item>
            <Dropdown.Item href="/productos/RESMAS">RESMAS</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="COMPONENTES">
            <Dropdown.Item href="/productos/DISCOS RIGIDOS">DISCOS RIGIDOS</Dropdown.Item>
            <Dropdown.Item href="/productos/FUENTES">FUENTES</Dropdown.Item>
            <Dropdown.Item href="/productos/GABINETES">GABINETES</Dropdown.Item>
            <Dropdown.Item href="/productos/MOTHERBOARDS">MOTHERBOARDS</Dropdown.Item>
            <Dropdown.Item href="/productos/PROCESADORES">PROCESADORES</Dropdown.Item>
            <Dropdown.Item href="/productos/PLACAS DE VIDEO">PLACAS DE VIDEO</Dropdown.Item>
            <Dropdown.Item href="/productos/MEMORIAS">MEMORIAS</Dropdown.Item>
          </DropdownButton>

          {/* <NavDropdown title="COMPONENTES" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/DISCOS RIGIDOS">DISCOS RIGIDOS</NavLink>
            <NavLink className="dropdown-item" to="/productos/FUENTES">FUENTES</NavLink>
            <NavLink className="dropdown-item" to="/productos/GABINETES">GABINETES</NavLink>
            <NavLink className="dropdown-item" to="/productos/MOTHERBOARDS">MOTHERBOARDS</NavLink>
            <NavLink className="dropdown-item" to="/productos/PROCESADORES">PROCESADORES</NavLink>
            <NavLink className="dropdown-item" to="/productos/PLACAS DE VIDEO">PLACAS DE VIDEO</NavLink>
            <NavLink className="dropdown-item" to="/productos/MEMORIAS">MEMORIAS</NavLink>
          </NavDropdown> */}

          <DropdownButton id="dropdown-basic-button" title="PERIFERICOS">
            <Dropdown.Item href="/productos/WEBCAM">WEBCAM</Dropdown.Item>
            <Dropdown.Item href="/productos/TECLADOS">TECLADOS</Dropdown.Item>
            <Dropdown.Item href="/productos/MOUSES">MOUSES</Dropdown.Item>
          </DropdownButton>

          {/* <NavDropdown title="PERIFERICOS" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/WEBCAM">WEBCAM</NavLink>
            <NavLink className="dropdown-item" to="/productos/TECLADOS">TECLADOS</NavLink>
            <NavLink className="dropdown-item" to="/productos/MOUSE">MOUSE</NavLink>
          </NavDropdown> */}

          <DropdownButton id="dropdown-basic-button" title="ALMACENAMIENTO">
            <Dropdown.Item href="/productos/DISCOS EXTERNOS">DISCOS EXTERNOS</Dropdown.Item>
            <Dropdown.Item href="/productos/PENDRIVES">PENDRIVES</Dropdown.Item>
            <Dropdown.Item href="/productos/CD-DVD-BLURAY">CD-DVD-BLURAY</Dropdown.Item>
          </DropdownButton>

          {/* <NavDropdown title="ALMACENAMIENTO" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/DISCOS EXTERNOS">DISCOS EXTERNOS</NavLink>
            <NavLink className="dropdown-item" to="/productos/PENDRIVES">PENDRIVES</NavLink>
          </NavDropdown> */}

          <DropdownButton id="dropdown-basic-button" title="CONECTIVIDAD">
            <Dropdown.Item href="/productos/ROUTERS">ROUTERS</Dropdown.Item>
            <Dropdown.Item href="/productos/PLACA DE RED">PLACA DE RED</Dropdown.Item>
            <Dropdown.Item href="/productos/CONEXION INALAMBRICA">CONEXION INALAMBRICA</Dropdown.Item>
          </DropdownButton>



          {/* <NavDropdown title="CONECTIVIDAD" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/ROUTERS">ROUTERS</NavLink>
            <NavLink className="dropdown-item" to="/productos/PLACA DE RED">PLACA DE RED</NavLink>
          </NavDropdown> */}

          <Button className="dropdown-basic-button" href="/productos/MONITORES" title="MONITORES">MONITORES</Button>

          {/* <NavLink className="dropdown-item" to="/productos/MONITORES">MONITORES</NavLink> */}

          <DropdownButton id="dropdown-basic-button" title="AUDIO">
            <Dropdown.Item href="/productos/PARLANTES">PARLANTES</Dropdown.Item>
            <Dropdown.Item href="/productos/AURICULARES">AURICULARES</Dropdown.Item>
            <Dropdown.Item href="/productos/MICROFONOS">MICROFONOS</Dropdown.Item>
          </DropdownButton>

          {/* <NavDropdown title="AUDIO" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/PARLANTES">PARLANTES</NavLink>
            <NavLink className="dropdown-item" to="/productos/AURICULARES">AURICULARES</NavLink>
            <NavLink className="dropdown-item" to="/productos/MICROFONOS">MICROFONOS</NavLink>
          </NavDropdown> */}

          <Button className="dropdown-basic-button" href="/contacto" title="CONTACTO">CONTACTO</Button>

          {/* <NavLink className="dropdown-item" to="/contacto">CONTACTO</NavLink> */}
=======
        <Nav>
          <NavLink className="dropdown-item" to="/">INICIO</NavLink>
          <NavLink className="dropdown-item" to="/productos/">PRODUCTOS</NavLink>
          <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/MOUSE">MOUSE</NavLink>
            <NavLink className="dropdown-item" to="/productos/TECLADOS">TECLADOS</NavLink>
            <NavLink className="dropdown-item" to="/productos/ALMACENAMIENTO">ALMACENAMIENTO</NavLink>
            <NavLink className="dropdown-item" to="/productos/ROUTER">ROUTER</NavLink>
            <NavLink className="dropdown-item" to="/productos/PARLANTES">PARLANTES</NavLink>
            <NavLink className="dropdown-item" to="/productos/TONERS">TONERS</NavLink>
          </NavDropdown>
          <NavLink className="dropdown-item" to="/contacto">CONTACTO</NavLink>
          {/* <Link to="cart" style={{ textDecoration: 'none' }}><CartWidget /></Link>           */}
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
        </Nav>
      </Navbar>
      {/* <ModalLogin /> */}
    </header>
  )
}


export default NavComponent;

