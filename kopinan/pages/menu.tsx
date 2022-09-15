import type { NextPage } from 'next'
import { useState } from 'react';
import MenuOptions from '../components/menuOptions';

const Menu: NextPage = () => {
    const [menuOption, setMenuOption] = useState("all");

    return (
        <div className=''>
            <MenuOptions setMenuOption={setMenuOption}/>
        </div>
    )
}

export default Menu;