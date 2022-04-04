import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='mt-60'>
            <h1 className='text-4xl'>Page Not Found</h1>
<section class="error-container">
  <span><span>4</span></span>
  <span>0</span>
  <span><span>4</span></span>
</section>
<div class="link-container">
  <Link to="/home">Return to Home</Link>
</div>
        </div>
    );
};

export default NotFound;