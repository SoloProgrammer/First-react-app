import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

const Hero = ({ darkMode }) => {
    return (
        <div className='flex gap-4 items-center w-full justify-center mt-40'>
            <LeftHero darkMode={darkMode}/>
            <RightHero />
        </div>
    )
}

export default Hero
