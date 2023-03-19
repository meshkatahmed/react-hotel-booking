import {Navbar,Nav,NavbarBrand,NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='navigation'>
            <Navbar>
                <Nav>
                    <NavbarBrand href='/' className='navbrand pb-5'>
                        <img src='logo192.png' alt='Brand'/>
                    </NavbarBrand>
                    <NavItem className='navitem'>
                        <Link to='/home' className='navitem-link'>Home</Link>
                    </NavItem>
                    <NavItem className='navitem'>
                        <Link to='/register' className='navitem-link'>Sign Up</Link>
                    </NavItem>
                    <NavItem className='navitem'>
                        <Link to='/services' className='navitem-link'>Services</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;