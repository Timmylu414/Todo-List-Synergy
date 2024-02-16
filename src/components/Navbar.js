import { FiHome } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';
import { MdGroups } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";



const Navbar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <a href='/Home'>
                        <FiHome />
                        My Home
                    </a>
                </li>
                <li>
                    <a href='/Day'>
                        <MdOutlineWbSunny />
                        My Day
                    </a>
                </li>
                <li>
                    <a href='/About'>
                        <BsPersonFill />
                        My Profile
                    </a>
                </li>
                <li>
                    <a href='/Group'>
                        <MdGroups />
                        My Group
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar