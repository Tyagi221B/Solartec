import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2" />
                            <small>123 Street, New York, USA</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <small className="far fa-clock text-primary me-2" />
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-phone-alt text-primary me-2" />
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-square btn-link rounded-0" href><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <h2 className="m-0 text-primary">Solartec</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/About" className="nav-item nav-link">About</Link>
                        <Link to="/Service" className="nav-item nav-link">Service</Link>
                        <Link to="/Project" className="nav-item nav-link">Project</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <Link to="/Features" className="dropdown-item">Features</Link>
                                <Link to="/Quote" className="dropdown-item">Free Quote</Link>
                                <Link to="/Team" className="dropdown-item">Our Team</Link>
                                <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/Page404" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                        <Link to="/Login" className="nav-item nav-link">LogIn</Link>
                        <Link to="/Register" className="nav-item nav-link">Register</Link>
                    </div>
                    <a href className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3" /></a>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}

export default Header