import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Header = () => (
    <AppBar position='sticky'>
        <Toolbar>
            <div className='header_container'>
                <div>
                    <h1>MOVIES AND TV INFORMATION</h1>
                </div>
                <div>
                    <ul className='menu_options'>
                        <li>
                            <Link to="/">MOVIES</Link>
                        </li>
                        <li>
                            <Link to="/SeriesTv">SERIES AND TV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Toolbar>
    </AppBar>
);

export default Header;
