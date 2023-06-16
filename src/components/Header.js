import React from 'react'
import Menu from './Menu'
import RegularBtn from './RegularBtn'
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

const Header = ({ darkMode, setDarkMode }) => {

  const toggleDarkMode = () => {
    // if (darkMode) setDarkMode(false)
    // else setDarkMode(true)

    setDarkMode(!darkMode)
  }
  return (
    <div className={`w-full shadow-sm ${darkMode ? "bg-gray-800" : "bg-white"} flex justify-between py-3 px-8`}>
      <div className="logoDiv flex items-center justify-center gap-2">
        <p className={`font-medium ${darkMode ? "text-white" : "text-black"} text-2xl first-letter:text-blue-700 first-letter:text-4xl`}>Text_Utils</p>
        <img className='w-12' src="https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png" alt="" />
      </div>
      <div className="leftside flex gap-10 items-center">
        <Menu darkMode={darkMode} />
        <RegularBtn buttonCopy="Sign up" color="red" />

        <img
          src={
            !darkMode
              ?
              "https://cdn-icons-png.flaticon.com/512/1779/1779841.png"
              :
              "https://cdn-icons-png.flaticon.com/512/2969/2969516.png"}
          className='cursor-pointer w-8'
          onClick={toggleDarkMode}
        />
        {/* {darkMode
          ?
          <BsSunFill color={`${darkMode ? "white" : "black"}`} className='cursor-pointer' onClick={toggleDarkMode} />
          :
          <BsFillMoonStarsFill color={`${darkMode ? "white" : "black"}`}  className='cursor-pointer' onClick={toggleDarkMode} />} */}

      </div>
    </div>
  )
}

export default Header // this statement tells the module that only that component should be exported form the current