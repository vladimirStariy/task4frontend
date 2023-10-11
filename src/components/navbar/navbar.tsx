import { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/store';
import { logout, selectName } from '../../store/slices/auth.slice';
import { useSelector } from 'react-redux';

interface INavbar {
    auth: string | null;
} 

const AppNavbar: FC<INavbar> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const name = useSelector(selectName);

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login');
    }

    return <>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Task 4</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className='gap-4'>
                        {name !== null ? 
                            name !== undefined ? 
                                <>
                                    <div style={{display: 'flex', alignItems: 'center'}}>Hello {props.auth}</div>
                                    <Button variant='warning' onClick={handleLogout}>Logout</Button> 
                                </>
                                : 
                                <Link className='btn btn-warning' to='/login'>Sign in</Link>
                            :
                            <Link className='btn btn-warning' to='/login'>Sign in</Link>
                        }   
                    </Nav>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default AppNavbar;