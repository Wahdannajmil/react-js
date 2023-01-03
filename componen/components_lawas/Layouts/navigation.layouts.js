import { Navbar, Container, Nav } from "react-bootstrap"

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/albums">Sejarah</Nav.Link>
            <Nav.Link href="/posts">Kesenian</Nav.Link>
            <Nav.Link href="/posts">Tradisi</Nav.Link>
            <Nav.Link href="/posts">Pariwisata</Nav.Link>
            <Nav.Link href="/kuliner">Kuliner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation