import React, { useState, useEffect } from 'react';

const Footer = () => {
    let year = new Date().getFullYear();

    return ( 
        <footer>&#169; {year} EPATest.com. All Rights Reserved</footer>
     );
}
 
export default Footer;