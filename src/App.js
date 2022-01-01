import './App.css';
import Cube from './components/Cube';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [zoom, setZoom] = useState(250);
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);
  const [color, setColor] = useState("dark");

  const generate = () => {
    let array = [];

    for(let i=0; i < rowCount; i++){
      array.push(
        <div className='row2'>
          {createBoxes()}
        </div>
      );
    } 

    return(array.map((item) =>{
      return(item)
    }))
  }

  const createBoxes = () => {
    let array = [];

    for(let i=0; i < colCount; i++){
      array.push(
        <Cube color={color} season="01" name="The Dog" nft="dog" number="0001"/>
      )
    } 

    return(array.map((item) =>{
      return(item)
    }))
  }
  
  useEffect(() => {
    document.documentElement.style.setProperty('--cube', `${zoom}px`);
  }, [zoom]);


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
        {generate()}
      </div>
      <div id="settings">
        <Row>
          <Col className='pb-5'>
            <h3>Color</h3>
            {["dark", "red", "blue"].map((item)=>{
              return(
                <Form.Check 
                  name="group1"
                  aria-label="Colors"
                  type="radio"
                  id={`${item}-color`}
                  onChange={()=>{setColor(item)}}
                  label={item.charAt(0).toUpperCase() + item.slice(1)}
                >
                </Form.Check>
              )
            })}
          </Col>
        </Row>
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

            <label for="rowRange" className="form-label">
              <h3>Row Count</h3>
            </label>
            <input 
              type="range" 
              className="form-range" 
              min="1" 
              max="5" 
              step="1" 
              id="rowRange"
              defaultValue={rowCount}
              onChange={(e)=>{setRowCount(e.target.value)}}
            />

            <label for="colRange" className="form-label">
              <h3>Col Count</h3>
            </label>
            <input 
              type="range" 
              className="form-range" 
              min="1" 
              max="5" 
              step="1" 
              id="colRange"
              defaultValue={colCount}
              onChange={(e)=>{setColCount(e.target.value)}}
            />
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
}

export default App;
