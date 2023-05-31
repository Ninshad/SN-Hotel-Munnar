import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container pb-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4">
                        <div class="bg-primary rounded p-4">
                            <a href="/"><h1 class="text-white text-uppercase mb-3">SN Munnar</h1></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i> Hotel SN <br/>  &nbsp; &nbsp; &nbsp; &nbsp;Kanan Devan Hills <br/>
                        &nbsp; &nbsp; &nbsp; &nbsp;A.M. Road, Moolakadai,<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp;Munnar, Idukki, Kerala,<br/>
                        &nbsp; &nbsp; &nbsp; &nbsp;S.India - 685612 <br/></p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>04865 230212<br/>&nbsp; &nbsp; &nbsp; &nbsp;04865 230312<br/></p>
                        <p class="mb-2"><i class="fas fa-mobile-alt me-3"></i>&nbsp;8075190680<br/>&nbsp; &nbsp; &nbsp; &nbsp;9048872111<br/></p>
                        
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>team@snmunnar.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="row gy-5 g-4">
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <Link class="btn btn-link" to="/about">About Us</Link>
                                <Link class="btn btn-link" to="/contact">Contact Us</Link>
                            </div>
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <a class="btn btn-link" href="">Food & Restaurant</a>
                                <Link class="btn btn-link" to="/rooms">Rooms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <Link to={'https://ninshad.tech/'}>
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; {currentYear} Ninshad M. All Right Reserved. 
							
                        </div>
                        </Link>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <Link to="/">Home</Link>
                                <a href="/contact">Cookies</a>
                                <a href="/contact">Help</a>
                                <a href="/contact">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer