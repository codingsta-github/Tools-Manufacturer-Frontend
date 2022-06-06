import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Oops!</h1>
            <h5>404-page not found</h5>
            <p>The page you are looking for might have been removed <br /> had it's name changed or is temporarily unavailable</p>
            <Link className="button" to="/">
              Go to homepage
            </Link>
        </div>
    );
};

export default NotFound;