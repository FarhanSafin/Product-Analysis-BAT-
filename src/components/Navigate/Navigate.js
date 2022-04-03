import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navigate = (props) => {
    const {name, link} = props.route
    return (
        <li className='mr-16'>
            <CustomLink to={link}>{name}</CustomLink>
        </li>
    );
};

export default Navigate;