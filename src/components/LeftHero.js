import React from 'react'
import RegularBtn from './RegularBtn'

const LeftHero = ({darkMode}) => {
    return (
        <div className="lefthero">
            <div>
                <h3 className='text-3xl'>Lorem ipsum dolor sit amet consectetur</h3>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptate quidem <br />laboriosam neque fuga? Praesentium, ullam culpa perferendis voluptas nam natus nulla inventore?</p>
            <RegularBtn color="red" buttonCopy="Explore hunt"/>
        </div>
    )
}

export default LeftHero
