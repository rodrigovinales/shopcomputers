import React from 'react';
import logoNav from "../img/LOGO.png";
import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";
import "../Css/NavBar.css";


const NavComponent = () => {

  return (

    <header className="App-header">
      <Link to="/"><img src={logoHeader} className="logoHeader col-6" alt="logoHeader" /></Link>
      <Navbar expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logoNav} className="logoNav" alt="logoNav" /> {' '}
        </Navbar.Brand>
        <Nav>
          <Button
            variant="secondary"
            className="d-inline mx-1"
            href="/" title="INICIO">INICIO
          </Button>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            variant="secondary"
            title="IMPRESION">
            <div className="probando">
              <Dropdown.Item href="/productos/IMPRESORAS">IMPRESORAS</Dropdown.Item>
              <Dropdown.Item href="/productos/TONERS">TONERS</Dropdown.Item>
              <Dropdown.Item href="/productos/CARTUCHOS EPSON">CARTUCHOS EPSON</Dropdown.Item>
              <Dropdown.Item href="/productos/CARTUCHOS HP">CARTUCHOS HP</Dropdown.Item>
              <Dropdown.Item href="/productos/CARTUCHOS ALTERNATIVOS">CARTUCHOS ALTERNATIVOS</Dropdown.Item>
              <Dropdown.Item href="/productos/BOTELLAS TINTA">BOTELLAS DE TINTA</Dropdown.Item>
              <Dropdown.Item href="/productos/RESMAS">RESMAS</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            variant="secondary"
            id="dropdown-basic-button"
            title="COMPONENTES">
            <div className='probando'>
              <Dropdown.Item href="/productos/DISCOS RIGIDOS">DISCOS RIGIDOS</Dropdown.Item>
              <Dropdown.Item href="/productos/FUENTES">FUENTES</Dropdown.Item>
              <Dropdown.Item href="/productos/GABINETES">GABINETES</Dropdown.Item>
              <Dropdown.Item href="/productos/MOTHERBOARDS">MOTHERBOARDS</Dropdown.Item>
              <Dropdown.Item href="/productos/PROCESADORES">PROCESADORES</Dropdown.Item>
              <Dropdown.Item href="/productos/PLACAS DE VIDEO">PLACAS DE VIDEO</Dropdown.Item>
              <Dropdown.Item href="/productos/MEMORIAS">MEMORIAS</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="PERIFERICOS"
            variant="secondary">
            <div className='probando'>
            <Dropdown.Item href="/productos/WEBCAM">WEBCAM</Dropdown.Item>
            <Dropdown.Item href="/productos/TECLADOS">TECLADOS</Dropdown.Item>
            <Dropdown.Item href="/productos/MOUSES">MOUSES</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="ALMACENAMIENTO"
            variant="secondary">
            <div className='probando'>

            <Dropdown.Item href="/productos/DISCOS EXTERNOS">DISCOS EXTERNOS</Dropdown.Item>
            <Dropdown.Item href="/productos/PENDRIVES">PENDRIVES</Dropdown.Item>
            <Dropdown.Item href="/productos/CD-DVD-BLURAY">CD-DVD-BLURAY</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="CONECTIVIDAD"
            variant="secondary">
            <div className='probando'>

            <Dropdown.Item href="/productos/ROUTERS">ROUTERS</Dropdown.Item>
            <Dropdown.Item href="/productos/PLACA DE RED">PLACA DE RED</Dropdown.Item>
            <Dropdown.Item href="/productos/CONEXION INALAMBRICA">CONEXION INALAMBRICA</Dropdown.Item>
            </div>
          </DropdownButton>

          <Button
            className="d-inline mx-1"
            href="/productos/MONITORES"
            variant="secondary"
            title="MONITORES">MONITORES</Button>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="AUDIO"
            variant="secondary">
            <div className='probando'>
            <Dropdown.Item href="/productos/PARLANTES">PARLANTES</Dropdown.Item>
            <Dropdown.Item href="/productos/AURICULARES">AURICULARES</Dropdown.Item>
            <Dropdown.Item href="/productos/MICROFONOS">MICROFONOS</Dropdown.Item>
            </div>
          </DropdownButton>

          <Button
            className="d-inline mx-1"
            href="/contacto"
            variant="secondary"
            title="CONTACTO">CONTACTO
          </Button>
        </Nav>
      </Navbar>
      {/* <ModalLogin /> */}
    </header>
  )
}


export default NavComponent;

