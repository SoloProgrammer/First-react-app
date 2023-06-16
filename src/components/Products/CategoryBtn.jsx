import React from 'react'

const CategoryBtn = ({ catName, currCat, handleFunc }) => {
    return (
        <button onClick={() => handleFunc(catName)} className={`px-3 py-1 rounded-full bg-gray-300 text-black ${currCat === catName && "!bg-indigo-500 !text-white"} cursor-pointer !w-fit shadow-sm`}>{catName}</button>
    )
}

export default CategoryBtn
