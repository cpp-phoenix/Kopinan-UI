import type { NextPage } from 'next'
import { NavConfig } from '../types/types'

const NavOptions: NextPage = () => {
    const navOptions: NavConfig[] = [
        {
            index: 1,
            title: "Home",
            logo: "",
            link: "",
        },
        {
            index: 2,
            title: "Menu",
            logo: "",
            link: "",
        },
        {
            index: 3,
            title: "History",
            logo: "",
            link: "",
        },
        {
            index: 4,
            title: "Wallet",
            logo: "",
            link: "",
        },
        {
            index: 5,
            title: "Promos",
            logo: "",
            link: "",
        },
        {
            index: 6,
            title: "Setting",
            logo: "",
            link: "",
        }
    ]
    
    return (
        <div className='space-y-2'>   
            {
                navOptions.map(nav => 
                    <div key={nav.index} className="flex justify-center items-center rounded-lg text-md px-2 py-6 text-[#BBB8C4] hover:text-white hover:bg-[#A7775C]">
                        <button>{nav.title}</button>
                    </div>
                )
            }
        </div>
    )
}

const SideBar: NextPage = () => {
    return (
        <div className='flex flex-col items-center h-full w-1/12 py-10'>
            <div className='w-full flex justify-center font-bold text-xl'>
                Logo
            </div>
            <div className='flex-1 flex justify-center w-full py-16'>
                <NavOptions/>
            </div>
            <div>
                <button className='rounded-lg text-[#BBB8C4] w-full px-2 py-6 hover:text-white hover:bg-[#A7775C]'>Logout</button>
            </div>
        </div>
    )
}

export default SideBar;