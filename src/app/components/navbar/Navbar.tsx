import Link from 'next/link'
import { FaSquareFacebook, FaSquareXTwitter, FaSquareYoutube  } from "react-icons/fa6";
import AuthLinks from '../authLink/AuthLinks';
import ToggleTheme from '../toggleTheme/ToggleTheme';

const Navbar = ({ className }) => {
    return (
        <div className="flex px-2 py-3 mb-2 border-b-2 border-red-400">
            <div className="flex flex-1">
                <Link href="/"className='pl-2'><FaSquareFacebook/></Link>
                <Link href="/"className='pl-2'><FaSquareXTwitter/></Link>
                <Link href="/"className='pl-2'><FaSquareYoutube /></Link>
            </div>
            <div className="flex-1">Illuminati Bx</div>
            <div className="flex justify-between flex-1">
                <ToggleTheme/>
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks/>
            </div>
        </div>
    );
};

export default Navbar;
