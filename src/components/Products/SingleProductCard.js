import React from 'react'

const SingleProductCard = ({ prod }) => {

    let { title, description, thumbnail } = prod

    return (
        <div className="card overflow-hidden !w-96" style={{ width: "18rem" }}>
            <div className='w-full h-52'>
                <img className="w-full h-full object-cover card-img-top" src={thumbnail} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-5">{description.slice(0,60)}...</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    )
}

export default SingleProductCard
