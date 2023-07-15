import Link from "next/link";

const Nav = () => {
  const navLinks = [
    { nav: "Contact", link: "#contact" },
    { nav: "Projects", link: "#projects" },
    { nav: "About", link: "#about" },
  ];
  return (
    <nav className="mainNav">
      <ul className="flex f-column">
        {navLinks.map((navLink, i) => {
          return (
            <li key={i} className="nav-link__modified">
              <Link href={navLink.link}>{navLink.nav}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
