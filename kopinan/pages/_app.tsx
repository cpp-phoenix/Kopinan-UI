import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideBar from '../components/sideBar'
import Cart from '../components/cart'
import { createContext, useState } from 'react'

export const AppContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [cartArry, setCartArry] = useState();

  return (
    <AppContext.Provider value={{
      state: {
        cartArry:cartArry,
      },
      setCartArry: setCartArry,
    }}>
    <h1 className="fixed w-full h-screen flex flex-row ">
      <SideBar/>
      <div className='flex-1 bg-[#EEEDF3] overflow-y-scroll p-8'>
        <Component {...pageProps} />
      </div>
      <Cart />
    </h1>
    </AppContext.Provider>
  ) 
}

export default MyApp
