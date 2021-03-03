import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { routers } from '_const';

const Nav = () => {
    return (
        <ul className="nav-list">
            {routers.map((item) => {
                return (
                    <li key={item.path}>
                        <Link to={item.path} exact>
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Nav;
