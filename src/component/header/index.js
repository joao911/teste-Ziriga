import React from 'react'

import Logo from './img/logo.svg'
import Home from './img/home.svg'
import Search from './img/search.svg'

import './header.scss'
const Header = props => {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="menu">
                <div className="home">
                    <img src={Home} alt="" />
                </div>
                <div className="nav">
                    <ul>
                        <li>CATEGORIE</li>
                        <li>CATEGORIE</li>
                        <li>CATEGORIE</li>
                        <li>DIVERSOS</li>
                    </ul>
                </div>
                <div className="busca">
                    <input type="text"/>
                    <img src={Search} alt="busca"/>
                </div>
            </div>
        </div>
    )
}
export default Header