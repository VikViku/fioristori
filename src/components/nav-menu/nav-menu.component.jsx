import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import './nav-menu.style.scss';

const NavMenu = () => (
    // <Navbar className="shadow" bg="light" expand="lg" fixed="top">
    //     <Navbar.Brand href="/" className="mr-4">FioriStori</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //         <Nav>
    //             <Nav.Item>
    //                 <Nav.Link href="/" className="mr-3">Pagrindinis</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="#about" className="mr-3">Apie mane</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="#services" className="mr-3">Paslaugos</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="#rent" className="mr-3">Nuoma</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="#gallery" className="mr-3">Galerija</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="#feedback" className="mr-3">Atsiliepimai</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="#contacts">Kontaktai</Nav.Link>
    //             </Nav.Item>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    <div className="nav-container">
        <nav>
            <input type="checkbox" id="nav-toggle"/>
            <label for="nav-toggle" className="burger-menu">
                <span className="burger-icon">&nbsp;</span>
            </label>
            
            <div className="left-menu">
                <a href="#s">Paslaugos</a>
                <a href="#b">Nuoma</a>
                <a href="#b">Atsiliepimai</a>
            </div>
            <a href="/" className="logo">FIORI STORI</a>
            <div className="right-menu">
                <a href="#s">Apie mane</a>
                <a href="#a">Galerija</a>
                <a href="#c">Kontaktai</a>
            </div>
        </nav>
    </div>

    );

export default NavMenu;