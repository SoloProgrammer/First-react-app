import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = ({darkMode}) => {
    let menuList = [
        { item: "Home", navLink: "/" },
        { item: "TextEditor", navLink: "/texteditor" },
        { item: "StopWatch", navLink: "/timer" },
        { item: "user123", navLink: "/user/123" },
        { item: "Products", navLink: "/products" }
    ]
    return (
        <div className="menuList flex gap-16">
            {
                menuList.map(m => {
                    return (
                        <NavLink to={`${m.navLink}`} className={`font-medium px-4 py-1 bg-gray-200 cursor-pointer hover:bg-purple-500 hover:text-white rounded-2xl ${darkMode && "text-black"}`}>{m.item}</NavLink>
                    )
                })
            }
        </div>
    )
}

export default Menu
