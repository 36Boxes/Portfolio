import React from "react";

// Reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  Row,
  Col,
  DropdownToggle
} from "reactstrap";

const MyNavbar = (props) => {
    
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Navbar className="navbar-main navbar-transparent navbar-light headroom navbar navbar-expand-lg headroom--top headroom--not-bottom" >
            <NavbarBrand href="/"><img alt="..." src="../../assets/img/36FinalLogo.png"/> 36Boxes</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Row>
                    <Col>
                    <div class="collapse-close col">
                                <NavbarToggler onClick={() => {setIsOpen(!isOpen)}}>
                                    <span></span>
                                    <span></span>
                                </NavbarToggler>
                            </div>
                    </Col>
                </Row>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/blogs">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects">Past Projects</NavLink>
                    </NavItem>

                    <UncontrolledDropdown
                    inNavbar
                    nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Login/Sign-up
                        </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavLink className="text-dark" href="/users/login">
                                Login
                                </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink className="text-dark" href="/users/signup">
                                Sign-up
                                </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown
                    inNavbar
                    nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Settings
                        </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavLink className="text-dark" href="/users/home">
                                User Home
                                </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink className="text-dark" href="/admin/home">
                                Admin Home
                                </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
            <ul class="align-items-lg-center ml-lg-auto navbar-nav">
                    <li class="nav-item">
                        <a href="https://www.instagram.com/36boxes" target="_blank" rel="noreferrer" class="nav-link-icon nav-link">
                            <i class="fa fa-instagram"></i>
                            <span class="nav-link-inner--text d-lg-none ml-2">Instagram</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://twitter.com/36boxes" target="_blank" class="nav-link-icon nav-link">
                            <i class="fa fa-twitter-square"></i>
                            <span class="nav-link-inner--text d-lg-none ml-2">Twitter</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/36boxes" target="_blank" class="nav-link-icon nav-link">
                            <i class="fa fa-github"></i>
                            <span class="nav-link-inner--text d-lg-none ml-2">Github</span>
                        </a>
                    </li>
                    <li class="d-none d-lg-block ml-lg-4 nav-item">
                        <a href="/contact" class="btn-neutral btn-icon btn btn-default">
                            <span class="btn-inner--icon">
                                <i class="far fa-paper-plane"></i>
                            </span>
                            <span class="nav-link-inner--text ml-1"> Get In Contact</span>
                        </a>
                    </li>
                </ul>
            </Collapse>
        </Navbar>
    );
};

export default MyNavbar;