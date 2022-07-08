import React from 'react'
import {Row,Col,Container,Button,Form} from 'react-bootstrap';
import axios from 'axios'
import SmallCardHero from '../../components/smallCardHero'

const Tier  = () => {
    
    const token=localStorage.getItem("token")
    const user = localStorage.getItem("username")
    const statusLogin = localStorage.getItem("statusLogin")
    const [anableInsert,setAnableInsert] = React.useState(false);
    const [allHero,setAllHero] = React.useState([]);
    const [load,setLoad] = React.useState(false);

    const [inputTier,setInputTier] = React.useState('');
    const [inputLane,setInputLane] = React.useState('');
    const [inputHero,setInputHero] = React.useState("");
    const [inputDark,setInputDark] = React.useState([]);
    const [inputAbyss,setInputAbyss] = React.useState([]);
    const [inputMid,setInputMid] = React.useState([]);
    const [inputJuggle,setInputJuggle] = React.useState([]);
    const [inputRoam,setInputRoam] = React.useState([]);
    const [inputAllReview,setInputAllReview] = React.useState([]);

    function insertTier(){

        let dataHero = {
            heroName:inputHero.name,
            heroId:inputHero.id,
            lane:inputLane,
            tier:inputTier
        }
        let dataHeroReview = {
            hero : inputHero,
            lane:inputLane,
            tier:inputTier
        }
        if(inputLane==="DARK SLAYER"){
            inputDark.push(dataHero)
        }
        else if(inputLane==="ABYSSAL DRAGON"){
            inputAbyss.push(dataHero)
        }
        else if(inputLane==="MIDLANE"){
            inputMid.push(dataHero)
        }
        else if(inputLane==="JUGGLE"){
            inputJuggle.push(dataHero)
        }
        else if(inputLane==="ROAMING"){
            inputRoam.push(dataHero)
        }
        inputAllReview.push(dataHeroReview)
        console.log(inputAllReview)
        // formData.append("name",inputName)
        // formData.append("range",inputRange)
        // formData.append("role",inputRole)
        // formData.append("role",inputRole2)
        // formData.append("img",imgHero)
    }

    function createTier(){
        console.log(inputDark)
        axios.post("https://rov-guide-backend.herokuapp.com/api/tier",{
            owner: "test",
            nameTier: "test2",
            idUser: "1",
            dark: inputDark,
            abyssal: inputAbyss,
            mid: inputMid,
            jungle: inputJuggle,
            roam: inputRoam
        },
        {
            headers: {
                'Authorization': 'Bearer ' + token,   
            },
        }).then((res)=>{
            console.log(res.data)
            getAllHero()  
        }).catch((e) => {
            console.log(e.response.data.message);
        });

    }

    function getAllHero(){
        axios.get("https://rov-guide-backend.herokuapp.com/api/getAllHero",).then((res)=>{ 
            setAllHero(res.data.projects)
            setLoad(true)
        }).catch((e) => {
            console.log(e.response.data.message);
        });
    }

    React.useEffect(()=>{
       console.log(allHero)
    }, [allHero]);

    React.useEffect(()=>{
        getAllHero()
    },[])

    

    return (
        <div>
            <br></br>
            <Row>
                <Col md={10}>
                    <div>
                        <ul className="snip1143">
                            <li><a href="/" data-hover="Home">Home</a></li>
                            <li className="current"><a href="/tier" data-hover="Tier list">Tier list</a></li>
                            <li><a href="/hero" data-hover="Hero">Hero</a></li>
                            <li><a href="/item" data-hover="Item">Item</a></li>
                            <li><a href="/enchemtment" data-hover="Enchemtment">Enchemtment</a></li>
                            <li><a href="/contact" data-hover="Contact">Contact</a></li>
                        </ul>
                        
                    </div>
                </Col>
                <Col md={2}>
                    {statusLogin?(<div><h5 align="center" className='text-white' >| user : {user} |</h5></div>):(<div><h5 align="left" className='text-white' >| not logged in |</h5></div>)}
                    <a href="/" onClick={()=>{localStorage.clear()}} data-hover="Logout">Logout</a>
                </Col>
            </Row>
            
                
           
            {!anableInsert?(
            <div>
                
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} align>
                        
                        <div className='cardHero' align="center">
                            <Col md={12}>
                                <Row>
                                    <Col md={1}>
                                        <div className='textLaneCard'>
                                            <h1></h1>
                                        </div>
                                        <div className='texttierCard'>
                                            <h1>S</h1>
                                        </div>
                                        <div className='texttierCard'>
                                            <h1>A</h1>
                                        </div>
                                        <div className='texttierCard'>
                                            <h1>B</h1>
                                        </div>
                                        <div className='texttierCard'>
                                            <h1>F</h1>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='textLaneCard'>
                                            <h2>DARK SLAYER</h2>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="DARK SLAYER" && hero.tier==="S"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="DARK SLAYER" && hero.tier==="A"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="DARK SLAYER" && hero.tier==="B"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="DARK SLAYER" && hero.tier==="F"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='textLaneCard'>
                                            <h2>ABYSSAL DRAGON</h2>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ABYSSAL DRAGON" && hero.tier==="S"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ABYSSAL DRAGON" && hero.tier==="A"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ABYSSAL DRAGON" && hero.tier==="B"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ABYSSAL DRAGON" && hero.tier==="F"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='textLaneCard'>
                                            <h2>MIDLANE</h2>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="MIDLANE" && hero.tier==="S"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="MIDLANE" && hero.tier==="A"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="MIDLANE" && hero.tier==="B"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="MIDLANE" && hero.tier==="F"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='textLaneCard'>
                                            <h2>JUGGLE</h2>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="JUGGLE" && hero.tier==="S"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="JUGGLE" && hero.tier==="A"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="JUGGLE" && hero.tier==="B"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="JUGGLE" && hero.tier==="F"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='textLaneCard'>
                                            <h2>ROAMING</h2>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ROAMING" && hero.tier==="S"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ROAMING" && hero.tier==="A"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ROAMING" && hero.tier==="B"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                        <div className='tierCreateCard'>
                                            <Row>
                                                {inputAllReview.map((hero) => (
                                                    <>
                                                    {hero.lane==="ROAMING" && hero.tier==="F"?(
                                                        <Col md={3}>
                                                            <img  className="imgMini" src={`data:image/jpeg;base64,${hero.hero.imageData}`} />
                                                        </Col>
                                                    ):
                                                    (<></>)}
                                                    </>
                                                ))}  
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                        <Button onClick={()=>{setAnableInsert(!anableInsert)}} >insert</Button>
                        <Button onClick={()=>{createTier()}} >สร้าง</Button>
                    </Col>
                </Row>
                {/* </Container> */}
            </div>
            ):(
            <div>
                <Row>
                    <div align="center">
                    <Col md={10}>
                            <Row>
                                <Col md={3}>
                                    <div className='cardHero'>\
                                        {inputHero!==""?(<div><img  className="tierSelectPic" src={`data:image/jpeg;base64,${inputHero.imageData}`} /></div>):(<div></div>)}
                                        <Form.Select aria-label="Default select example" value={inputLane} onChange={(e) => { setInputLane(e.target.value) }}>
                                            <option value="">กรุณาตำแหน่ง</option>
                                            <option value="DARK SLAYER">DARK SLAYER</option>
                                            <option value="ABYSSAL DRAGON">ABYSSAL DRAGON</option>
                                            <option value="MIDLANE">MIDLANE</option>
                                            <option value="JUGGLE">JUGGLE</option>
                                            <option value="ROAMING">ROAMING</option>
                                        </Form.Select>
                                        <br></br>
                                        <Form.Select aria-label="Default select example" value={inputTier} onChange={(e) => { setInputTier(e.target.value) }}>
                                            <option value="">กรุณาเลือกระดับ</option>
                                            <option value="S">S</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="F">F</option>
                                        </Form.Select>  
                                        <br></br>
                                        <Button onClick={()=>{insertTier()}} >เพิ่ม</Button>
                                        <br></br>
                                        <br></br>
                                        <Button onClick={()=>{setAnableInsert(!anableInsert)}} >ยกเลิก</Button>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <div className='cardHero'>
                                        <Row>
                                            {allHero.map((hero) => (
                                                <Col md={1}>
                                                    <img  onClick={(e)=>{setInputHero(hero)}} className="tierSelectPic" src={`data:image/jpeg;base64,${hero.imageData}`} />
                                                </Col>
                                            ))}  
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                    </Col>
                    </div>
                </Row>
                
            </div>
            )}
        </div>  
    )
}

export default Tier