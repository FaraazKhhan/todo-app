import React from 'react'
import {FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa'

function Menubar(props) {
    return (
        <aside className={`menu p-2 ${props.menuClicked ? "active" : ""}`}>
          <div className="menu__container">
            <div className="menu__about">
                <img src="assets/images/me.png" className="menu__image" alt="my image" />
                <h1>Faraaz Khhan</h1>
                <h2>Developer</h2>
                <p>
                    Thanks for using <strong>Planno</strong>. 
                    Hope you find it helpful.
                    <span>Peace ✌</span>
                </p>
            </div>
            <nav className="menu__nav">
                <p>Other links:</p>
                <a href="http://faraazy.netlify.app" target="_blank" rel="noopener noreferrer">
                    My website
                </a>
                <a href="http://faraazkhhan.netlify.app" target="_blank" rel="noopener noreferrer">
                    My portfolio
                </a>
            </nav>

            <div className="menu__social-container">
                <p>Follow me:</p>  
                <div className="social-container mt-05">
                    <a href="http://www.instagram.com/faraazy" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                    </a>
                    <a href="http://www.instagram.com/faraazy" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                    </a>
                    <a href="http://www.instagram.com/faraazy" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    </a>
                </div>
            </div>
          </div>
        </aside>
    )
}

export default Menubar
