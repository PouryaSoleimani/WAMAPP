import React from 'react'
import CategoryBoxComponent from '../modules/CategoryBoxComponent'

const CategoryGridSection = () => {
    return (
        <div className='border-4 border-red-800 GRID__PARENT'>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
           <CategoryBoxComponent/>
        </div>
    )
}

export default CategoryGridSection