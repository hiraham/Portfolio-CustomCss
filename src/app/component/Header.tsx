import Link from "next/link";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link href="/" className="logo">
          Hira Naz
        </Link>

        <div className="nav-links">
          <Link href="#home" scroll={true} className="nav-link">Home</Link>
          <Link href="#about" scroll={true} className="nav-link">About</Link>
          <Link href="#projects" scroll={true} className="nav-link">Projects</Link>
          <Link href="#skills" scroll={true} className="nav-link">Skills</Link>
          <Link href="#contact" scroll={true} className="nav-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
