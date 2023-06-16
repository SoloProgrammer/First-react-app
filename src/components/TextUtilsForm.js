import React, { useState } from 'react'
import RegularBtn from './RegularBtn'
import RegularTextArea from './RegularTextArea'

const TextUtilsForm = () => {

    const [inptValue, setInptValue] = useState("")
    
    function changeToUpperCase() {
        setInptValue(inptValue.toUpperCase())
    }

    function changeToLowerCase() {
        setInptValue(inptValue.toLowerCase());
    }

    function trimSpaces() {
        let regx = /\s+/g
        setInptValue(inptValue.replace(regx, " "))
    }

    function handleChange(e) {
        setInptValue(e.target.value)
    }

    return (
        <div className='w-full px-60 mt-10'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-2xl">Enter your text below to anylize</label>
                <RegularTextArea handleFunc={handleChange} inptValue={inptValue} />
            </div>
            <div className="flex gap-3 mt-7">
                <RegularBtn handleFunc={changeToUpperCase} buttonCopy="Covert to UpperCase" color="blue" />
                <RegularBtn handleFunc={changeToLowerCase} buttonCopy="Covert to LowerCase" color="red" />
                <RegularBtn handleFunc={trimSpaces} buttonCopy="Remove all extra spaces" color="gray" />
            </div>
            <div>
                <h3 className='font-normal mt-10 text-3xl'>
                    Your Text Summary
                </h3>
                <div className='flex gap-2 font-normal text-lg mt-2'>
                    <p>Total words: </p><span>{inptValue.length > 0 ? inptValue.replace(/\s+/g," ").trim().split(" ").length : 0}</span>
                </div>
                <div className='flex gap-2 font-normal text-lg mt-2'>
                    <p>Total chars: </p><span>{inptValue.length > 0 ? inptValue.replace(/\s+/g,"").trim().split("").length : 0}</span>
                </div>
            </div>
        </div>

    )
}

export default TextUtilsForm
