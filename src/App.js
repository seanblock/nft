import './App.css';
import Cube from './components/Cube';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const zoomIn = () => {
    document.documentElement.style.setProperty('--cube', '300px');
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">NFT Gallery</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    <div id="header">
      <div id="wall">
        <div className="row2">
          <Cube color="dark" season="01" name="The Dog" nft="dog" number="0001"
           onClick={zoomIn()}/>
          <Cube color="red" season="01" name="The Cat" nft="cat" number="0005"/>
          <Cube color="red" season="01" name="The Cat" nft="cat" number="0005"/>
        </div>
        <div className="row2">
          <Cube color="blue" season="01" name="The Cat" nft="cat" number="0003"/>
          <Cube color="blue" season="01" name="The Cat" nft="cat" number="0002"/>
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0002"/>
        </div>
        <div className="row2">
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
          <Cube color="red" season="01" name="The Cat" nft="cat" number="0001"/>
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
        </div>
        <div className="row2">
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
        </div>
        <div className="row2">
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
          <Cube color="dark" season="01" name="The Cat" nft="cat" number="0001"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
