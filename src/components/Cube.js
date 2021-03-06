import { Col, Row } from "react-bootstrap";
import qr from '../img/wallet.png'
import dog from '../img/dog.png'
import cat from '../img/cat.png'
import { useState } from "react";

const Cube = ({color, season, name, nft, number}) => {

    const nftItem = () => {
        if (nft == "dog") {
            return(<img src={dog} alt="initial" className="starter"/>)
        } else if(nft == "cat") {
            return(<img src={cat} alt="initial" className="starter"/>)
        } else {
            return(<img src={nft} alt="initial" className="starter"/>)
        }
    }

    const [hover, setHover] = useState(false);

    return ( 
    <div className="preserve">
        
        <div className={`cube ${hover ? "cube2":""}`} 
            onMouseEnter={()=>{setHover(true)}}
            onMouseLeave={()=>{setHover(false)}}
        >
            <div className="starter">{nftItem(nft)}</div>
            <div className={`cube-front ${hover ? "cube-front2":""}`}>
                <div 
                    className={`glass-door ${hover ? "glass-door2":""}`}
                ></div>
                <span className={`item-info ${hover ? "item-info2": ""}`}>
                    <div className="item-row">
                        <div className="item-season">
                            <h4>SERIES</h4>
                            <h1>{season}</h1>
                        </div>
                        <div className="item-qr ms-2 p-2">
                            <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="ether"/>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="item-name">
                            <h3>{name} <span className="number">#{number}</span></h3>
                        </div>
                    </div>
                </span>
            </div>
            <div className={`cube-back ${color}-box`}>
                
            </div>
            <div className={`cube-left ${color}-box`}></div>
            <div className={`cube-right ${color}-box`}></div>
            <div className={`cube-top ${color}-box`}></div>
            <div className={`cube-bottom ${color}-box`}></div>
        </div>
    </div>
    
    );
}
 
export default Cube;