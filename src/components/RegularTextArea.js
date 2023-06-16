import React from 'react'

const RegularTextArea = ({ inptValue, handleFunc }) => {
    return (
        <textarea value={inptValue} onChange={handleFunc} className="form-control border-black" rows="10"></textarea>
    )
}

export default RegularTextArea
