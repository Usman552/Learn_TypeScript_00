import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-8 py-4 ">
      <div className="text-xl font-bold">
        Portfolio
      </div>

      <div className="flex gap-6">
        <Link href="/" className="text-blue-600/100 font-bold">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;