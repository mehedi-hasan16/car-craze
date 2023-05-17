import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Car Craze</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Link to="/" className="text-white me-2 text-decoration-none">Home</Link>
                        <Link to="/alltoy" className="text-white me-2 text-decoration-none">All-Toy</Link>
                        <Link to="/blog" className="text-white me-2 text-decoration-none">Blogs</Link>
                        <Link to="/login" className="text-white me-2 text-decoration-none">Login</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavigationBar;