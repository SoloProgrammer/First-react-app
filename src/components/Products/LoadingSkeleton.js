import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = () => {
    return (
        <div className='w-full flex flex-wrap gap-3 px-5 mb-10 '>
            {
                Array.from({ length: 8 }).fill(0).map(_ => {
                    return <div className='w-96'>
                        <Skeleton className='block h-60' />
                        <div>
                            <Skeleton className='block h-5' />
                            <Skeleton className='block h-10 !w-32 mt-7' />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default LoadingSkeleton
