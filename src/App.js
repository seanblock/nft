import './App.css';
import Cube from './components/Cube';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [zoom, setZoom] = useState(250);
  const [rotate, setRotate] = useState(0);
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);
  const [color, setColor] = useState("green");

  

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      let page = window.pageYOffset + 100
      setOffset(page)
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--origin', `${offset}px`);
  }, [offset]);

  const [nftList, setNftlist] = useState([
    {
      color: "strobe",
      season: "01",
      name: "The Dog",
      nft: "dog",
      number: "0001",
    },
    {
      color: "green",
      season: "01",
      name: "The Dog",
      nft: "dog",
      number: "0002",
    },
    {
      color: "blue",
      season: "01",
      name: "The Cat",
      nft: "cat",
      number: "0001",
    },

  ])

  

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
      <div id="grid-system">
        <div id="sidebar">
          <Row>
            <Col>
              <label for="customRange2" className="form-label">
                <h3>Cube Size</h3>
              </label>
              <input 
                type="range" 
                className="form-range" 
                min="150" max="400" 
                id="customRange2" 
                defaultValue={zoom}
                onChange={(e)=>{setZoom(e.target.value)}}
              />            
            </Col>
          </Row>
        </div>
        <div id="nft">
          <Container className="preserve pb-5">
            <h1 className='title'>Collection</h1>
            <Row className="row-cols-auto preserve perspective">
                {nftList.map((item)=>{
                  return(
                    <Cube 
                      color={item.color} 
                      season={item.season}
                      name={item.name}
                      nft={item.nft}
                      number={item.number}
                    />
                  )
                })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
