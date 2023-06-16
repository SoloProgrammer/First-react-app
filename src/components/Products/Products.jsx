import React, { useEffect, useState } from 'react'
import SingleProductCard from './SingleProductCard'
import CategoryBtn from './CategoryBtn'
import LoadingSkeleton from './LoadingSkeleton';

const Products = () => {

    const [myProducts, setMyProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [currCategory, setCurrCategory] = useState("")

    const [load, setLoad] = useState(true)

    const getProducts = async () => {
        let res = await fetch(`https://dummyjson.com/products`)
        let jsonProductsData = await res.json()
        setLoad(false)
        let { products } = jsonProductsData
        setMyProducts(products)
    }

    const getCategories = async () => {
        let res = await fetch('https://dummyjson.com/products/categories');
        let jsonCategoriesData = await res.json()
        jsonCategoriesData.unshift('All')
        setCurrCategory(jsonCategoriesData[0])
        setCategories(jsonCategoriesData)
    }

    const getProductsBycat = async (cat) => {
        setLoad(true)
        setCurrCategory(cat)
        if (cat === "All") return getProducts()
        let res = await fetch(`https://dummyjson.com/products/category/${cat}`)
        let jsonProductsData = await res.json()
        setLoad(false)
        let { products } = jsonProductsData
        setMyProducts(products)
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    return (
        <div>
            <h3 className='text-center text-3xl font-medium my-10'>All {currCategory === "All" ? "Products" : currCategory}</h3>
            <div className='mx-5 my-10'>
                <p className='text-2xl text-violet-700 py-2'>All Categories</p>
                <div className="categories flex gap-3 flex-wrap">
                    {
                        categories?.map(cat => {
                            return <CategoryBtn handleFunc={getProductsBycat} catName={cat} currCat={currCategory} />
                        })
                    }
                </div>
            </div>
            {
                load
                    ?
                    <LoadingSkeleton />
                    :
                    <div className='flex px-4 flex-wrap gap-3 justify-center'>
                        {myProducts.map(p => {
                            return <SingleProductCard key={p.id} prod={p} />

                        })}
                    </div>
            }
        </div>
    )
}

export default Products
