import React,{Component} from 'react';
import "./Footer.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'

class Footer extends Component{
    render() {
        return (

            <footer>
                <div className="container footer">
                    <span>&copy; Szymon Rymarowicz</span>
                    <div>
                    <a target={"_blank"} href='/'>
                        <FontAwesomeIcon className="icons" icon={faInstagram} />
                    </a>
                    <a target={"_blank"} href='https://github.com/szymon-rymarowicz'>
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                    </a>
                    <a target={"_blank"} href='/' >
                        <FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;