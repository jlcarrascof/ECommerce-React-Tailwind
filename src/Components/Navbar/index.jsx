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
            </ul>
        </nav>
    )
}
