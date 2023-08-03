import { useState } from 'react';
import styles from '../style';
import { navLinks } from '../constants';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState('')
  return (
    <nav className={styles.nav}>
       <h1 className={`${styles.heading1} extras:hidden block`}>BPL</h1>
      <h1 className={`${styles.heading1} extras:block hidden`}>Brooklyn Public Library</h1>
      <div className='flex ml-auto'>
        <ul className={`list-none md:flex hidden justify-between items-center w-[90%]`} >
            {navLinks.map((nav) => (
              <li key={nav.id} className={`font-inter ml-[30px] font-regular cursor-pointer text-header_footer_text text-[1.27rem] ${styles.hover} leading-10 ${ styles.text }`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
        </ul>
        <a className='h-[28px] pr-2 flex flex-start align-middle justify-center' href="#"><img src='/icon_profile.png' alt="Profile" className='icon-profile xs:block hidden'/></a>
        <div className='burger-img' onClick={() => setBurgerActive(prevState => prevState ? '' : 'active')}>
            <div className='pt-6'>
              <span className={`line ${burgerActive}`}></span>
              <span className={`line ${burgerActive}`}></span>
              <span className={`line ${burgerActive}`}></span>
            </div>
        </div>
        <div className={`burger-menu pt-[27px] pb-[70px] extras:w-[332px] w-full relative ${burgerActive}`}>
          <a className='w-full h-[50px] flex justify-end align-middle items-center pr-[21%] pb-4' href="#"><img src='/icon_profile.png' alt="Profile" className='icon-profile'/></a>
          <ul className={`list-none md:hidden flex flex-col justify-between items-center `} >
            {navLinks.map((nav) => (
              <li key={nav.id} className={`font-inter pb-[30px] ml-[30px] font-regular cursor-pointer text-header_footer_text text-[1.27rem] ${styles.hover} leading-10 ${ styles.text }`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
        </div>
      </div>
    </nav>
  )
}




export default Header

