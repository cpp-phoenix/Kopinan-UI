import type { NextPage } from 'next'

const categoryList = [
    {
        key: "all",
        label: "All"
    },
    {
        key: "coffee",
        label: "Coffee"
    },
    {
        key: "juice",
        label: "Juice"
    },
    {
        key: "milk_based",
        label: "Milk Based"
    },
    {
        key: "snack",
        label: "Snack"
    },
    {
        key: "rice",
        label: "Rice"
    },
    {
        key: "dessert",
        label: "Dessert"
    },
    {
        key: "dessert",
        label: "Dessert"
    },
    {
        key: "dessert",
        label: "Dessert"
    },
    {
        key: "dessert",
        label: "Dessert"
    },
    {
        key: "dessert",
        label: "Dessert"
    },
    {
        key: "dessert",
        label: "Dessert"
    }
]

const MenuOptions: NextPage = ({setMenuOption}: any) => {
    return (
        <div className=''>
            <span className='text-2xl font-semibold'>Choose Category</span>
            <div className='flex flex-row py-6 border-4 overflow-x-scroll'>
                {
                    categoryList.map(category => 
                        <div className='rounded-lg border-4 w-60 h-28 mx-4' key = {category.key}>
                            {category.label}
                        </div>    
                    )
                }
            </div>
        </div>
    )
}

export default MenuOptions;