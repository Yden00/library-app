import { navLinks } from '../constants';

interface NavbarProps {
  ulClassName: string;
  liClassName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ ulClassName, liClassName }) => {
  return (
    <ul className={ulClassName}>
      {navLinks.map((nav) => (
        <li key={nav.id} className={liClassName}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
};