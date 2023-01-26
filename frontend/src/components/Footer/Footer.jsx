import React from 'react'
import { Link } from "react-router-dom"
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./style.scss"
function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className='footer'>
          <li>
            Copyright ©2023 All rights reserved | This template is made with  by <Link to="/">Colorlib</Link>
          </li>
          <li>
            <ul>
              <li>
                <FaPinterest />
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer >
  )
}

export default Footer