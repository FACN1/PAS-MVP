import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>
 (
   <div>
    <Link to="/method"><img src="#" alt="back button" /></Link>
    <Link to="/walking"><div>Arrived</div></Link>
   </div>
 );

export default Footer;
