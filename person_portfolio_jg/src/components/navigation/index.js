import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export default function Navigation() {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
           <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
           </Container>
           <Container>
             <Navbar.Brand href="#about">About</Navbar.Brand>
           </Container>
              <Container>
                 <Navbar.Brand href="#Skills">Skills</Navbar.Brand>
                </Container>
                <Container>
                 <Navbar.Brand href="#education">Education</Navbar.Brand>
                </Container>
              <Container>
                 <Navbar.Brand href="#projects">Projects</Navbar.Brand>
                </Container>
        </Navbar>
    )
}
// import Nav from "react-bootstrap/Nav";