import React from "react";
import {Row,Col} from 'react-bootstrap'

const SmallCardHero = (props)=>{
    
    return(
        
        <div  className="smallCardHero" align="left">
            <Row>
                <Col md={4}>
                    <img  className="smallPic" src={`data:image/jpeg;base64,${props.hero.imageData}`} />
                </Col>
                <Col md={8}>
                    <div className="textNameSmall">
                        <h5 className="text-white" >{props.hero.name}</h5>
                    </div>
                </Col>
            </Row>
                
        </div>
       
    )
}

export default SmallCardHero;