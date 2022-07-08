import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import axios from 'axios'

const Home  = () => {

    const user = localStorage.getItem("username")
    const statusLogin = localStorage.getItem("statusLogin")
    const [anableLogin,setAnableLogin] = React.useState(false);
    const [inputUserName,setInputUserName] = React.useState("");
    const [inputPassword,setInputPassword] = React.useState("");

    function logIn(){
        console.log("555")
        axios
        .post("https://rov-guide-backend.herokuapp.com/api/auth/signin",{
            username:inputUserName,
            password:inputPassword,
        }).then((res)=>{

            localStorage.setItem("token",res.data.accessToken)
            localStorage.setItem("username",res.data.username)
            localStorage.setItem("statusLogin",true)
            // setUser(res.data.username)
            setAnableLogin(false)
            console.log(res.data)
                
        }).catch((e) => {
            console.log(e.response.data.message);
        });
    }


    return (
        <div>
            <br></br>
            <Row>
                <Col md={10}>
                    <div>
                        <ul className="snip1143">
                            <li className="current"><a href="/" data-hover="Home">Home</a></li>
                            <li><a href="/tier" data-hover="Tier list">Tier list</a></li>
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
            {anableLogin?
            (<div>
                <Row>
                    <Col md={12}>
                        <section className="login">
                            <div className="login_box">
                                <div className="left">
                                    <div className="top_link"><div className='closeBt' onClick={()=>{setAnableLogin(!anableLogin)}} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png" alt=""></img></div></div>
                                    <div className="contact">
                                        <div >
                                            <h3>SIGN IN</h3>
                                            <input value={inputUserName} onChange={(e)=>{setInputUserName(e.target.value)}} type="text" placeholder="USERNAME"></input>
                                                <input value={inputPassword} onChange={(e)=>{setInputPassword(e.target.value)}} type="text" placeholder="PASSWORD"></input>
                                                <button onClick={()=>{logIn()}} className="submit">LET'S GO</button>
                                        </div>
                                            </div>
                                    </div>
                                    <div className="right">
                                        <div className="right-text">
                                            <h2>GUIDE</h2>
                                            <h5>Share your play , Share your hero</h5>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </Col>
                </Row>
            </div>)
            :(<div>
                <Container>
                <Row>
                    <Col md={5}>
                            <div className='card' align="center">
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
                                {statusLogin?(<div></div>):(
                                <div>
                                    <b onClick={()=>{setAnableLogin(!anableLogin)}}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Login
                                    </b>
                                </div>)}
                            </div>
                    </Col>
                    <Col md={7}>
                        <div className='cardHomeRight'>
                            <img src="https://pbs.twimg.com/media/EtSqDxgVoAASi0f.jpg" alt=''></img>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>)}
            
        </div>  
    )
}

export default Home