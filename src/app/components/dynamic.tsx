import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./navbarr'), { ssr: false });

export default Navbar;
