import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <Link to="/dashboard">
            <h2>Abhinav's Dashboard</h2>
        </Link>
        <Link to="/other-dashboard">
        <h2>Other Files Dashboard</h2>
    </Link>
    </>
    )
}

export default Nav;
