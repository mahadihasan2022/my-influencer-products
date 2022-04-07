import React from 'react';

const HeaderLink = (props) => {
    const {name, link} = props.route;
    return (
        <div className='mr-20 md:text-white sm:text-black hover:text-orange-400'> 
            <a href={link}>{name}</a>
        </div>
    );
};

export default HeaderLink;