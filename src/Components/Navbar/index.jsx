import { Navlink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Navlink to='/'>
                        Shopi
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/'>
                        All
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/'>
                        Clothes
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/'>
                        Electronics
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/'>
                        Furnitures
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/'>
                        Toys
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/'>
                        Others
                    </Navlink>
                </li>
            </ul>
        </nav>
    )
}
