import React from 'react'
import CategoryFlexBoxComponent from '../modules/CategoryFlexBoxComponent'

const categoryFlexBoxesData = [
    { id: 1, title: "شبکه های اجتماعی" },
    { id: 1, title: "سرگرمی و مدیا" },
]
const CategoryFlexSection = () => {
    return (
        <div className='flex items-center justify-center w-full gap-3 p-4'>
            {categoryFlexBoxesData.map((item) => (
                <CategoryFlexBoxComponent key={item.id} {...item} />
            ))}

        </div>
    )
}

export default CategoryFlexSection
