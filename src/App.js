import './App.css';
import Cube from './components/Cube';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [zoom, setZoom] = useState(250);
  const [rotate, setRotate] = useState(0);
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);
  const [color, setColor] = useState("green");

  const [tempColor, setTempColor] = useState("dark")
  const [tempSeason, setTempSeason] = useState(1)
  const [tempName, setTempName] = useState("")
  const [tempNft, setTempNft] = useState("https://lh3.googleusercontent.com/u-2FnHbaJ3U_KCDlmg2McX9Yfo7brsAzOffqihNXCGkHljA89SPPzwdjQiVSWcsvxCoj_ydBcDNCuZvHEekaYekaMEH4XX32k9US=w600")
  const [tempNumber, setTempNumber] = useState("0001")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [offset, setOffset] = useState(0);

  const addNft = () => {
    nftList.push(
      {
        color: tempColor,
        season: tempSeason,
        name: tempName,
        nft: tempNft,
        number: tempNumber,
      }
    )
  }


  useEffect(() => {
    window.onscroll = () => {
      let page = window.pageYOffset + 100
      setOffset(page)
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--origin', `${offset}px`);
  }, [offset]);

  useEffect(() => {
    document.documentElement.style.setProperty('--cube', `${zoom}px`);
    document.documentElement.style.setProperty('--rotateWallX', `-20deg`);
  }, [zoom]);

  const [nftList, setNftlist] = useState([
    {
      color: "strobe",
      season: "01",
      name: "The Dog",
      nft: "dog",
      number: "0001",
    },
  ])

  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">NFT Gallery</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        </Container>
      </Navbar>
      <div id="grid-system">
        <div id="sidebar">
          { sidebar ? 
          <Row className='row-cols-1 m-3'>
            <Col>
              <label for="customRange2" className="form-label">
                <h3 className='text-center w-100'>Cube Size(s)</h3>
              </label>
              <input 
                type="range" 
                className="form-range" 
                min="150" max="300" 
                id="customRange2" 
                defaultValue={zoom}
                onChange={(e)=>{setZoom(e.target.value)}}
              />            
            </Col>
            <Col className='mt-3'>
              <Button variant="primary" className="w-100" onClick={handleShow}>
                Add NFT
              </Button>
            </Col>
            <Col>
              {nftList.map((item, key)=>{
                return(
                  <div className="h5 text-light mt-4">
                    <span>
                      <Button 
                        variant="danger" 
                        className="btn-sm me-3 float-end"
                        onClick={()=>{
                          setNftlist([...nftList.slice(0, key)])
                        }}
                      >Delete</Button>
                    </span>
                    {`${item.name}  #${item.number}`}
                  </div>
                  ) 
              })}
            </Col>
            <Col>
              <Button 
                onClick={()=>{setSidebar(false)}}
                className="float-end mt-5">Hide Settings</Button>
            </Col>
          </Row> 
          :
          <Row>
            <Col>
              <Button 
                onClick={()=>{setSidebar(true)}}
                className="float-end m-3">Show Settings</Button>
            </Col>
          </Row>
          }
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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create NFT</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
          <Row>
            <Col xs={12}>
              <FloatingLabel
                controlId="tempName"
                label="NFT Name"
                className="mb-3"
              >
                <Form.Control 
                  type="text" 
                  defaultValue={tempName}
                  onChange={(e)=>{setTempName(e.target.value)}}
                />
              </FloatingLabel>
            </Col>
            <Col xs={12}>
              <FloatingLabel
                controlId="tempName"
                label="NFT URL"
                className="mb-3"
              >
                <Form.Control 
                  type="text" 
                  defaultValue={tempNft}
                  onChange={(e)=>{setTempNft(e.target.value)}}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="tempName"
                label="Series"
                className="mb-3"
              >
                <Form.Control 
                  type="text" 
                  defaultValue={tempSeason}
                  onChange={(e)=>{setTempSeason(e.target.value)}}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                  controlId="tempName"
                  label="Number"
                  className="mb-3"
                >
                  <Form.Control 
                    type="text" 
                    defaultValue={tempNumber}
                    onChange={(e)=>{setTempNumber(e.target.value)}}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Box Color">
                  <Form.Select 
                    onChange={(e)=>{
                      setTempColor(e.target.value)
                    }} 
                    aria-label="Floating label select example"
                  >
                    <option disabled>Color</option>
                    {["dark", "red", "blue", "green", "purple", "strobe"].map((item)=>{
                      return(
                        <option 
                          value={item}
                        >{item}</option>
                      )
                    })}
                  </Form.Select>
                </FloatingLabel>
              </Col>
              
          </Row>
        </Form>
          
        <div className="d-flex justify-content-center">
          <Cube 
            color={tempColor}
            season={tempSeason}
            name={tempName}
            nft={tempNft}
            number={tempNumber}
          />
        </div>


        </Modal.Body>
        <Modal.Footer>
          <Button className="me-3" variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            variant="primary"
            onClick={()=>{
              addNft()
              handleClose()
            }}
          >Add NFT</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
