import React from 'react'

const RegularBtn = (props) => {

    let { handleFunc, color, buttonCopy } = props
    
    return (
        <button onClick={handleFunc} className={`py-2 px-4 rounded-full bg-${color}-500 text-white`}>{buttonCopy}</button>
    )
}

export default RegularBtn
