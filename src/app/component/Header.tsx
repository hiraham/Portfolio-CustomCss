import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-primary transaition-colors">
          Hira Naz
        </Link>

        <div className="flex space-x-6 text-lg">
          <Link href="#home" scroll={true} className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" scroll={true} className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" scroll={true} className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#skills" scroll={true} className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#contact" scroll={true} className="hover:text-primary transition-colors">Contact</Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;

