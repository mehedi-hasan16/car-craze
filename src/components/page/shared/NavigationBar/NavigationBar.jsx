import { Button, Container, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogout = ()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/alltoy'>All-Toy</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                            
                        </Nav>
                        {
                            user 
                            ?<img src={user?.photoURL} alt="" style={{ width: '35px' }} className="rounded-circle mx-3" />
                            :<span>{user?.email}</span>
                        }
                        {
                            user
                            ? <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                            : <Link to='/login'><Button variant="outline-success">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;