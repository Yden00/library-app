import { navLinks } from '../constants'
import styles from '../style'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={`${styles.heading1}`}>Brooklyn Public Library</h1>

      <ul className='list-none md:flex hidden justify-between items-center w-[650px] pt-1'>
        {
          navLinks.map((nav)=>(
            <li key={nav.id} className={`font-inter font-regular cursor-pointer text-header_footer_text text-[1.27rem] hover:text-secondary leading-10 ${ styles.text }`}><a href={`#${ nav.id }`}>{nav.title}</a></li>
          ))
        }
        <a href="#"><img src='/icon_profile.png' alt="Profile" className='w-7 h-7 ml-3 cursor-pointer ' /></a>
      </ul>
    </nav>
  )
}
