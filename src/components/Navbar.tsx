import { navLinks } from '../constants';


interface NavBarProps {
  ulClassName: string;
  liClassName: string;
}

const NavBar = ({ ulClassName, liClassName }: NavBarProps) => (
    <ul className={ulClassName}>
      {navLinks.map((nav) => (
        <li key={nav.id} className={liClassName}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );


export default NavBar