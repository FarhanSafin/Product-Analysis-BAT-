import React from 'react';
import Link from '../Link/Link';

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
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link 
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>

 





    );
};

export default Navbar;