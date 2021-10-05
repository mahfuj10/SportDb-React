import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
<Link to="/home"> HOME </Link>
<Link to="/teams"> TEAMS </Link>
        </div>
    );
};

export default Header;