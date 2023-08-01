import { navLinks } from '../constants'
import styles from '../style'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={`${styles.heading1}`}>Brooklyn Public Library</h1>
      <div className='flex'>
        <ul className='list-none md:flex hidden justify-between items-center w-[580px] pt-1'>
          {
            navLinks.map((nav)=>(
              <li key={nav.id} className={`font-inter font-regular cursor-pointer text-header_footer_text text-[1.27rem] ${styles.hover} leading-10 ${ styles.text }`}><a href={`#${ nav.id }`}>{nav.title}</a></li>
            ))
         }
        </ul>
        <a href="#"><img src='/icon_profile.png' alt="Profile" className='w-7 h-7 ml-10 cursor-pointer ' /></a>
      </div>
    </nav>
  )
}
