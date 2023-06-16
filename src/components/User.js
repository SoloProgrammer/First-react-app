import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let params = useParams()
    return (
        <div className='flex mt-12 items-center justify-center'>
            <h1 className='text-4xl font-normal'>User Id is: { params.id }</h1>
        </div>
    )
}

export default User
