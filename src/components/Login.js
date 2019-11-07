import React from "react";
import { Link } from "react-router-dom";
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className= "container">
                <div className="ligne1">
                    <div className="haut row">
                        <Link className="img2" href=""><img className="img2" src="goldarmor/poisson.jpg" title="Pisces" alt="" /></Link>
                        <Link to="/belier" className="img2 imgTop"><img className="img2 imgTop" src="goldarmor/bélier.jpg" title="Aries" alt="" /></Link>
                        <Link className="img2" href=""><img className="img2" src="goldarmor/taureau.jpg" title="Taurus" alt="" /></Link>
                    </div>
                </div>
                <div className="ligne2 row">
                    <div className="gauche column1">
                        <Link className="img2 " href=""><img className="img2" src="goldarmor/verseau.jpg" title="Aquarius" alt="" /></Link>
                        <Link className="img2 imgLeft " href=""><img className="img2 imgLeft" src="goldarmor/capricorne.jpg" title="Capricorn" alt="" /></Link>
                        <Link className="img2 " href=""><img className="img2" src="goldarmor/sagittaire.jpg" title="Sagittarius" alt="" /></Link>
                    </div>
                    <div className="card middle">
                        <div className="front">
                            <img className="img" src="athena.jpg" alt="" />
                        </div>
                        <div className="back">
                            <div className="back-content ">
                                <div className="login-box">
                                    <h1>Login</h1>
                                    <div className="textbox">
                                        <i className = "fa fa-user" aria-hidden = "true"></i>
                                        <input type="text" placeholder="Username" name="" value=""/>
                                    </div>
                                    <div className="textbox">
                                        <i className = "fa fa-lock" aria-hidden = "true"></i>
                                        <input type="password" placeholder="Password" name="" value=""/>
                                    </div>
                                    <input className="btn" type="button" name="" value="Sign In" />
                                    <input type="checkbox" name="choix" id="choix" />
                                    <label for="subscribeNews">Remember me?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="droite column2">
                        <Link className="img2" href=""><img className="img2" src="goldarmor/gémeau.jpg" title="Gemini" alt="" /></Link>
                        <Link className="img2 imgRight" href=""><img className="img2 imgRight" src="goldarmor/cancer.jpg" title="Cancer" alt="" /></Link>
                        <Link className="img2" href=""><img className="img2" src="goldarmor/lion.jpg" title="Lion" alt="" /></Link>
                    </div>
                </div>
                <div className="ligne3">
                    <div className="bas row">
                        <Link className="img2" href=""><img className="img2" src="goldarmor/scorpion.jpg" title="Scorpio" alt="" /></Link>
                        <Link className="img2 imgDown" href=""><img className="img2 imgDown" src="goldarmor/balance.jpg" title="Libra" alt="" /></Link>
                        <Link className="img2" href=""><img className="img2" src="goldarmor/vierge.jpg" title="Virgo" alt="" /></Link>
                    </div>
                </div>
            </div>
        );
    }     
}

export default Login;