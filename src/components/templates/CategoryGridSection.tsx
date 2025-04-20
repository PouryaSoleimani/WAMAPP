import React from 'react'
import CategoryGridBoxComponent from '../modules/CategoryGridBoxComponent'

const boxDatas = [
    { id: 1, title: "پزشکی" },
    { id: 2, title: "بازار مالی" },
    { id: 3, title: " تحصیل" },
    { id: 4, title: "فریلنسری" },
    { id: 5, title: "گردشگری" },
    { id: 6, title: "مد و فشن" },
    { id: 7, title: " مالی" },
    { id: 8, title: "رستوران" },
    { id: 9, title: "لوازم دیجیتال" },
]
const CategoryGridSection = () => {
    return (
        <div className='GRID__PARENT'>
            {boxDatas.map((item) => (
                <CategoryGridBoxComponent {...item} />
            ))}
        </div>
    )
}

export default CategoryGridSection