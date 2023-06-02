import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const path = window.location.pathname
    let homeMenuClass
    let aboutMenuClass
    let servicesMenuClass
    let roomsMenuClass
    let testimoniaMenuClass
    let contactMenuClass

    window.location.pathname === '/' ? homeMenuClass = 'nav-item nav-link active' : homeMenuClass = 'nav-item nav-link'
    window.location.pathname === '/about' ? aboutMenuClass = 'nav-item nav-link active' : aboutMenuClass = 'nav-item nav-link'
    window.location.pathname === '/services' ? servicesMenuClass = 'nav-item nav-link active' : servicesMenuClass = 'nav-item nav-link'
    window.location.pathname === '/rooms' ? roomsMenuClass = 'nav-item nav-link active' : roomsMenuClass = 'nav-item nav-link'
    window.location.pathname === '/testimonial' ? testimoniaMenuClass = 'nav-item nav-link active' : testimoniaMenuClass = 'nav-item nav-link'
    window.location.pathname === '/contact' ? contactMenuClass = 'nav-item nav-link active' : contactMenuClass = 'nav-item nav-link'

  return (
    <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                <Link className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center" to="/">
                <h1 class="m-0 text-primary text-uppercase">SN Munnar</h1>
                </Link>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">team@snmunnar.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">04865 230212</p>&nbsp; &nbsp; &nbsp;
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">04865 230312</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><FontAwesomeIcon icon={faFacebook} style={{color:'#FEA116;'}} /></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <Link className="navbar-brand d-block d-lg-none" to="/">
                        <h1 class="m-0 text-primary text-uppercase">SN Munnar</h1>
                        </Link>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <Link class={homeMenuClass} to="/">Home</Link>
                                <Link class={aboutMenuClass} to="/about">About</Link>
                                <Link class={roomsMenuClass} to="/rooms">Rooms</Link>
                                <a class={contactMenuClass} href="/contact">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  )
}

export default NavBar