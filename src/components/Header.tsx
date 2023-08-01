import { useState } from 'react'
import styles from '../style'
import Navbar from './NavBar.tsx'

export const Header = () => {
  const [burgerActive, setBurgerActive] = useState('')
  return (
    <nav className={styles.nav}>
      <h1 className={`${styles.heading1}`}>Brooklyn Public Library</h1>
      <div className='flex ml-auto'>
        <Navbar 
          ulClassName={`list-none md:flex hidden justify-between items-center w-[90%] pt-1`} 
          liClassName={`font-inter ml-[30px] font-regular cursor-pointer text-header_footer_text text-[1.27rem] ${styles.hover} leading-10 ${ styles.text }`}
        />
        <a href="#"><img src='/icon_profile.png' alt="Profile" className='icon-profile xs:block hidden'/></a>
        <div className='burger-img md:hidden block mt-1 xxs:ml-[20px] ml-[32px]' onClick={() => burgerActive ? setBurgerActive('') : setBurgerActive('active')}>
            <span className={`line ${burgerActive}`}></span>
            <span className={`line ${burgerActive}`}></span>
            <span className={`line ${burgerActive}`}></span>
        </div>
        <div className={`burger-menu xs:pt-[22px] pt-[27px] pb-[70px] extras:w-[332px] w-full relative ${burgerActive}`}>
          <a href="#"><img src='/icon_profile.png' alt="Profile" className='icon-profile'/></a>
          <Navbar 
            ulClassName={`list-none md:hidden flex flex-col justify-between items-center `} 
            liClassName={`font-inter pb-[30px] ml-[30px] font-regular cursor-pointer text-header_footer_text text-[1.27rem] ${styles.hover} leading-10 ${ styles.text }`}
          />
        </div>
        <div>
        </div>
      </div>
    </nav>
  )
}
