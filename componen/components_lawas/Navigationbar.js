import { Navbar , Container , Nav} from "react-bootstrap";
import  logo from "../Assets/images/bg/logojogja.svg";
const Navigationbar = () => {
    return (
        <div className="navbar1">
        <Navbar variant="light">
            <Container>
            <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Nav>
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="Sejarah">SEJARAH</Nav.Link>
            <Nav.Link href="#trending">KESENIAN</Nav.Link>
            <Nav.Link href="#trending">TRADISI</Nav.Link>
            <Nav.Link href="#trending">PARIWISATA</Nav.Link>
            <Nav.Link href="#trending">KULINER</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigationbar