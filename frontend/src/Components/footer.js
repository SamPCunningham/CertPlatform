import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();

    return ( 
        <footer>&#169; {year} All Rights Reserved</footer>
     );
}
 
export default Footer;