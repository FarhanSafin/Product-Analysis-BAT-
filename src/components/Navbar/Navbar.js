import React from 'react';
import Navigate from '../Navigate/Navigate';

const Navbar = () => {

    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Reviews', link: '/reviews'},
        {id: 3, name: 'Dashboard', link: '/dashboard'},
        {id: 4, name: 'Blogs', link: '/blogs'},
        {id: 5, name: 'About', link: '/about'},
    ]

    return (
        <nav>
            <ul className='md:flex mt-9 ml-80 pl-96'>
                {
                    routes.map(route => <Navigate 
                    key={route.id}
                    route={route}
                    ></Navigate>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;