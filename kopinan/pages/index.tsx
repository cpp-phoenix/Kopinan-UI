import type { NextPage } from 'next'
import SideBar from '../components/sideBar'
import Cart from '../components/cart'

const Home: NextPage = () => {
  return (
    <h1 className="fixed w-full h-screen flex flex-row">
      <SideBar/>
      <div className='flex-1 bg-[#EEEDF3] overflow-y-scroll'>
          
      </div>
      <Cart />
    </h1>
  )
}

export default Home
