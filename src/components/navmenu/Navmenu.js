import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser} from '../../services/actions/authAction'
import './navmenu.css'
import { toast } from 'react-toastify'

const Navmenu = ({ isAuth, logoutUser }) => {

    const navbarWithoutLogin = <Nav className="ml-auto">
        <NavLink className="nav-link mx-2" to="/allads">Todos los anuncios</NavLink>
        <NavLink className="nav-link mx-2" to="/login">Entrar</NavLink>
        <NavLink className="nav-link mx-2" to="/register">Registrar</NavLink>
        <NavLink onClick={() => !isAuth && toast("Please log in")} className="btn btn-info mx-2" to="/sell">Publicar</NavLink>
    </Nav>

    const navbarWithLogin = <Nav className="ml-auto">
        <NavLink className="nav-link mx-2" to="/profile">Perfil</NavLink>
        <NavLink className="nav-link mx-2" to="/allads">Todos los anuncios</NavLink>
        <Link onClick={() => logoutUser()} to="/" className="nav-link mx-2">Salir</Link>
        <NavLink className="btn btn-info mx-2" to="/sell">Publicar</NavLink>
    </Nav>

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <NavLink className="navbar-brand" to="/">petLooker</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {isAuth ? navbarWithLogin : navbarWithoutLogin}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logoutUser})(Navmenu)
