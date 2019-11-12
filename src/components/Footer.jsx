import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <div className="SocialContainer">
                    <button className="SocialButton"><img className="SocialNetwork" src="./img/facebook.png" alt="Facebook"/></button>
                    <button className="SocialButton"><img className="SocialNetwork" src="./img/twitter.png" alt="Facebook"/></button>
                    <button className="SocialButton"><img className="SocialNetwork" src="./img/instagram.png" alt="Facebook"/></button>
                    <button className="SocialButton"><img className="SocialNetwork" src="./img/linkedin.png" alt="Facebook"/></button>
                </div>
                <p className="Footer_p">&copy; Wild Code School 2019.</p>
                <p className="Footer_p Legals">Legals</p>
            </div>
        )
    }
}

export default Footer;
