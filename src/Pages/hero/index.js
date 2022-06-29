import React from 'react'
import {Row,Col,Container,Form,InputGroup,FormControl} from 'react-bootstrap';
import axios from 'axios'

const Hero  = () => {
    const token=localStorage.getItem("token")
    const user = localStorage.getItem("username")
    const statusLogin = localStorage.getItem("statusLogin")
    const [anableInsert,setAnableInsert] = React.useState(false);
    const [inputName,setInputName] = React.useState("");
    const [inputRole,setInputRole] = React.useState("");
    const [inputRole2,setInputRole2] = React.useState("");
    const [inputRange,setInputRange] = React.useState("");
    const [imgHero,setImgHero] = React.useState("");

    function insertHero(){

        const formData = new FormData()
        formData.append("name",inputName)
        formData.append("range",inputRange)
        formData.append("role",inputRole)
        formData.append("role",inputRole2)
        formData.append("img",imgHero)

        axios.post("http://localhost:2000/api/addHero",formData,
        {
            headers: {
                'Authorization': 'Bearer ' + token,   
            },
        }).then((res)=>{
            console.log(res.data)  
        }).catch((e) => {
            console.log(e.response.data.message);
        });
    }

    React.useEffect(()=>{
        console.log(imgHero)
    }, [imgHero]);


    return (
        <div>
            <br></br>
            <Row>
                <Col md={10}>
                    <div>
                        <ul className="snip1143">
                            <li><a href="/" data-hover="Home">Home</a></li>
                            <li><a href="/tier" data-hover="Tier list">Tier list</a></li>
                            <li className="current"><a href="/hero" data-hover="Hero">Hero</a></li>
                            <li><a href="/item" data-hover="Item">Item</a></li>
                            <li><a href="/enchemtment" data-hover="Enchemtment">Enchemtment</a></li>
                            <li><a href="/contact" data-hover="Contact">Contact</a></li>
                        </ul>
                        
                    </div>
                </Col>
                <Col md={2}>
                    {statusLogin?(<div><h5 align="center" className='text-white' >| user : {user} |</h5></div>):(<div><h5 align="left" className='text-white' >| not logged in |</h5></div>)}
                </Col>
            </Row>
            {anableInsert?
            (<div>
                <Container>
                <Row>
                    <Col md={10}>
                        
                        <div className='cardHero' align="center">
                            <Col md={5}>
                            {imgHero===""?(<div></div>):(<div><img className='imghero' src={URL.createObjectURL(imgHero)} alt="Thumb"/></div>)}
                            <br></br>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='text-white' >เลือกรูปภาพฮีโร่ที่จะเพิ่ม</Form.Label>
                                <Form.Control type="file" onChange={(e)=>{
                                setImgHero(e.target.files[0])                                                                     
                            }}/>
                            </Form.Group>
                            <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default"  >ชื่อตัวละคร</InputGroup.Text>
                                <FormControl
                                value={inputName} onChange={(e)=>{setInputName(e.target.value)}}
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <Form.Select aria-label="Default select example" onChange={(e)=>{setInputRange(e.target.value)}}>
                                <option value="">กรุณาระยะการโจมตี</option>
                                <option value="Melee">Melee</option>
                                <option value="Range">Range</option>
                            </Form.Select>
                            <br></br>
                            <Form.Select aria-label="Default select example"  onChange={(e)=>{setInputRole(e.target.value)}}>
                                <option value="">กรุณาเลือกคลาส</option>
                                <option value="CARRY">CARRY</option>
                                <option value="ASSASIN">ASSASIN</option>
                                <option value="SUPPORT">SUPPORT</option>
                            </Form.Select>
                            <br></br>
                            <Form.Select aria-label="Default select example"  onChange={(e)=>{setInputRole2(e.target.value)}}>
                                <option value="">กรุณาเลือกคลาส</option>
                                <option value="CARRY">MAGE</option>
                                <option value="ASSASIN">FIGHTER</option>
                                <option value="SUPPORT">TANK</option>
                            </Form.Select>
                            <div>
                                    <b onClick={()=>{insertHero()}}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        create
                                    </b>
                            </div>
                            <div>
                                    <b onClick={()=>{setAnableInsert(!anableInsert)}}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Cancel
                                    </b>
                            </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>)
            :(<div>
                <Container>
                <Row>
                    <Col md={10}>
                            <div className='cardHero' align="center">
                                <h1 className='text-white' align="left">Create your own way <br></br>of playing.</h1><br></br>
                                <h5 className='text-white' align="left">
                                    Create your own set of items
                                    to your hero.<br></br><br></br>
                                    Manage hero tier.<br></br><br></br>
                                    Share your play with others.<br></br><br></br>
                                    more access.
                                </h5>
                            </div>
                            <div align="right">
                                {statusLogin?(
                                <div>
                                    <b onClick={()=>{setAnableInsert(!anableInsert)}}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        insert
                                    </b>
                                </div>):(<div></div>)}
                            </div>
                    </Col>
                </Row>
                </Container>
            </div>)}
            
        </div>  
    )
}

export default Hero