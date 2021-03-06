import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <h1>EPA Certification</h1>
            <h2>Proctored in Person Testing</h2>
            <h3>Online Testing</h3>
            <h3><Link to="/">Home</Link> <Link to="myinfo">My Info</Link> <Link to="myexams">My Exams</Link> <Link to="industryinfo">Industry Info</Link> <Link to="downloads">Downloads</Link> <Link to="store">Store</Link></h3>
        </header>
     );
}
 
export default Header;