import React from "react";
import { Link } from "react-router-dom";
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let desktop = window.innerWidth >= 401;
        if (desktop) {
            return (
                <div className="container dsk-12">
                    <div className="ligne1 dsk-12">
                        <div className="haut row dsk-12">
                            <Link to="/poisson" className="img2 dsk-1"><img className="img2" src="goldarmor/poisson.jpg" title="Pisces" alt="" /></Link>
                            <Link to="/belier" className="img2 imgTop dsk-1"><img className="img2 imgTop" src="goldarmor/bélier.jpg" title="Aries" alt="" /></Link>
                            <Link to="/taureau" className="img2 dsk-1"><img className="img2" src="goldarmor/taureau.jpg" title="Taurus" alt="" /></Link>
                        </div>
                    </div>
                    <div className="ligne2 row dsk-12">
                        <div className="gauche column1 dsk-12 ">
                            <Link to="/verseau" className="img2 dsk-6"><img className="img2" src="goldarmor/verseau.jpg" title="Aquarius" alt="" /></Link>
                            <Link to="/capricorne" className="img2 imgLeft dsk-6"><img className="img2 imgLeft" src="goldarmor/capricorne.jpg" title="Capricorn" alt="" /></Link>
                            <Link to="/sagittaire" className="img2 dsk-6"><img className="img2" src="goldarmor/sagittaire.jpg" title="Sagittarius" alt="" /></Link>
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
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <input type="text" placeholder="Username" name="name" value="" />
                                        </div>
                                        <div className="textbox">
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            <input type="password" placeholder="Password" name="password" value="" />
                                        </div>
                                        <input className="btn" type="button" name="" value="Sign In" />
                                        <input type="checkbox" name="choix" id="choix" />
                                        <label for="subscribeNews">Remember me?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="droite column2 dsk-12">
                            <Link to="/gemeau" className="img2 dsk-6"><img className="img2" src="goldarmor/gémeau.jpg" title="Gemini" alt="" /></Link>
                            <Link to="/cancer" className="img2 imgRight dsk-6"><img className="img2 imgRight" src="goldarmor/cancer.jpg" title="Cancer" alt="" /></Link>
                            <Link to="/lion" className="img2 dsk-6"><img className="img2" src="goldarmor/lion.jpg" title="Lion" alt="" /></Link>
                        </div>
                    </div>
                    <div className="ligne3 dsk-12">
                        <div className="bas row dsk-12">
                            <Link to="/scorpion" className="img2 dsk-1"><img className="img2" src="goldarmor/scorpion.jpg" title="Scorpio" alt="" /></Link>
                            <Link to="/balance" className="img2 imgDown dsk-1"><img className="img2 imgDown" src="goldarmor/balance.jpg" title="Libra" alt="" /></Link>
                            <Link to="/vierge" className="img2 dsk-1"><img className="img2" src="goldarmor/vierge.jpg" title="Virgo" alt="" /></Link>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <>
                    <div className="container mob-12">
                        <div className="card middle mob-12">
                            <div className="front">
                                <img className="img" src="athena.jpg" alt="" />
                            </div>
                            <div className="back">
                                <div className="back-content ">
                                    <div className="login-box">
                                        <h1>Login</h1>
                                        <div className="textbox">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <input type="text" placeholder="Username" name="" value="" />
                                        </div>
                                        <div className="textbox">
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            <input type="password" placeholder="Password" name="" value="" />
                                        </div>
                                        <input className="btn" type="button" name="" value="Sign In" />
                                        <input type="checkbox" name="choix" id="choix" />
                                        <label for="subscribeNews">Remember me?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container2 mob-12">
                        <div className="colonne1 ">
                            <Link to="/belier" className="img2 "><img className="img2" src="goldarmor/bélier.jpg" title="Aries" alt="" /></Link>
                            <Link to="/taureau" className="img2 "><img className="img2" src="goldarmor/taureau.jpg" title="Taurus" alt="" /></Link>
                            <Link to="/gemeau" className="img2 "><img className="img2" src="goldarmor/gémeau.jpg" title="Gemini" alt="" /></Link>
                            
                        </div>
                        <div className="colonne2 ">
                            <Link to="/cancer" className="img2 "><img className="img2" src="goldarmor/cancer.jpg" title="Cancer" alt="" /></Link>
                            <Link to="/lion" className="img2 "><img className="img2" src="goldarmor/lion.jpg" title="Lion" alt="" /></Link>
                            <Link to="/vierge" className="img2 "><img className="img2" src="goldarmor/vierge.jpg" title="Virgo" alt="" /></Link>
                            
                        </div>

                        <div className="colonne3 ">
                            <Link to="/balance" className="img2 "><img className="img2" src="goldarmor/balance.jpg" title="Libra" alt="" /></Link>
                            <Link to="/scorpion" className="img2 "><img className="img2" src="goldarmor/scorpion.jpg" title="Scorpio" alt="" /></Link>
                            <Link to="/sagittaire" className="img2 "><img className="img2" src="goldarmor/sagittaire.jpg" title="Sagittarius" alt="" /></Link>
                            
                        </div>
                        <div className="colonne4 ">
                            <Link to="/capricorne" className="img2 "><img className="img2" src="goldarmor/capricorne.jpg" title="Capricorn" alt="" /></Link>
                            <Link to="/verseau" className="img2 "><img className="img2" src="goldarmor/verseau.jpg" title="Aquarius" alt="" /></Link>
                            <Link to="/poisson" className="img2 "><img className="img2" src="goldarmor/poisson.jpg" title="Pisces" alt="" /></Link>
                        </div>
                    </div>
                </>
            );
        };
    }
}

export default Login;