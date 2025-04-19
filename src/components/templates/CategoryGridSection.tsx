import React from 'react'
import CategoryBoxComponent from '../modules/CategoryBoxComponent'

const boxDatas = [
    { id: 1, title: "لوازم فروشی" },
    { id: 2, title: "معلم" },
    { id: 3, title: "داروخانه" },
    { id: 4, title: "فریلنسری" },
    { id: 5, title: "سرگرمی و مدیا" },
    { id: 6, title: "شبکه اجتماعی" },
    { id: 7, title: "بازار مالی" },
    { id: 8, title: "ورزشی" },
    { id: 9, title: "تحصیل" },
]
const CategoryGridSection = () => {
    return (
        <div className='border-4 border-red-800 GRID__PARENT'>
            {boxDatas.map((item) => (
                <CategoryBoxComponent {...item} />
            ))}

        </div>
    )
}

export default CategoryGridSection