import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import Layout from '../Components/Layout';
import Rooms from '../Components/Rooms';
import { Link } from 'react-router-dom';
import Testimonial from '../Components/Testimonial';
import About from '../Components/About';
import Restaurant from '../Components/Restaurant';

const Home = () => {
    const [count, setCount] = useState(0);
    const [roomCount, setRoomCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const element = document.getElementById('counter-section');
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (window.pageYOffset > offsetTop - window.innerHeight && window.pageYOffset < offsetTop + height) {
                setRoomCount(100)
                setStaffCount(100)
                setClientCount(100)
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [count]);

    const handleCall = () => {
        window.open('tel:+91 9048872111');
    }


    // Banner-Slider

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timerID = setInterval(tick, 3000);

        return () => clearInterval(timerID);
    }, [currentImageIndex]);

    function tick() {
        const nextIndex = (currentImageIndex + 1) % 3;

        setCurrentImageIndex(nextIndex);
    }

    return (
        <>
            <Layout>
                <div class="container-xxl bg-white p-0">
                    {/* Carousel Start */}
                    {/* <div class="container-fluid p-0 mb-5">
                        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="w-carousal-100" src={window.screen.availWidth<768? "/Images/banner/banner4-crop.jpg" : "/Images/banner/banner4.jpg"} alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar. </h6>
                                            <h6 class=" text-white text-uppercase mb-3 animated slideInDown description">One of the oldest and finest hotel in munnar. </h6>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-carousal-100" src="/Images/about/about3.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                        <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar. </h6>
                                            <h6 class=" text-white text-uppercase mb-3 animated slideInDown description">It’s a pleasure and an honor to have you as a guest.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-carousal-100" src="/Images/about/about2.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" >
                                        <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to SN Munnar. </h6>
                                            <h6 class=" text-white text-uppercase mb-3 animated slideInDown description">Relaxation at a beautiful peak.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> */}
                    {/* Carousel End */}



                    <div className="slider">
                        <div className={currentImageIndex === 0 ? "showing" : ""}>
                            <img src="/Images/banner/banner4.jpg" alt="banner-1" className={currentImageIndex === 0 ? "showing" : ""} width={'100%'} height={'100%'} />
                            <h6 className={currentImageIndex === 0 ? "text-showing section-title-banner text-white text-uppercase mb-3 animated slideInDown" : "text-hide"}>Welcome to SN Munnar. </h6>
                            <h6 className={currentImageIndex === 0 ? "text-bottom-showing section-title-banner text-white text-uppercase mb-3 animated slideInDown description" : "text-hide"} >One of the oldest and finest hotel in munnar. </h6>
                        </div>
                        <div className={currentImageIndex === 1 ? "showing" : ""}>
                            <img src="/Images/about/about3.jpg" alt="banner-2" className={currentImageIndex === 1 ? "showing" : ""} width={'100%'} height={'100%'} />
                            <h6 className={currentImageIndex === 1 ? "text-showing section-title-banner text-white text-uppercase mb-3 animated slideInDown" : "text-hide"}>Welcome to SN Munnar. </h6>
                            <h6 className={currentImageIndex === 1 ? "text-bottom-showing section-title-banner text-white text-uppercase mb-3 animated slideInDown description" : "text-hide"} >It’s a pleasure and an honor to have you as a guest.</h6>
                        </div>
                        <div className={currentImageIndex === 2 ? "showing" : ""}>
                            <img src="/Images/about/about2.jpg" alt="banner-3" className={currentImageIndex === 2 ? "showing" : ""} width={'100%'} height={'100%'} />
                            <h6 className={currentImageIndex === 2 ? "text-showing section-title-banner text-white text-uppercase mb-3 animated slideInDown" : "text-hide"}>Welcome to SN Munnar. </h6>
                            <h6 className={currentImageIndex === 2 ? "text-bottom-showing section-title-banner text-white text-uppercase mb-3 animated slideInDown description" : "text-hide"} >Relaxation at a beautiful peak.</h6>
                        </div>
                    </div>
                    
                    <About />

                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="room-item shadow rounded overflow-hidden">
                                    <div class="position-relative">
                                        <img class="img-fluid" src="/Images/banner/banner12.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="room-item shadow rounded overflow-hidden">
                                    <div class="position-relative">
                                        <img class="img-fluid" src="/Images/banner/banner5.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="room-item shadow rounded overflow-hidden">
                                    <div class="position-relative">
                                        <img class="img-fluid" src="/Images/banner/banner6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Rooms />

                    <Restaurant />

                    {/* Video Start */}
                    {/* <div class="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
                        <div class="row g-0">
                            <div class="col-md-6 bg-dark d-flex align-items-center">
                                <div class="p-5">
                                    <h6 class="section-title text-start text-white text-uppercase mb-3">Welcome to</h6>
                                    <h1 class="text-white mb-4">SN MUNNAR</h1>
                                    <p class="text-white mb-4">One of the oldest and finest hotel in munnar.</p>
                                    <Link class="btn btn-primary py-md-3 px-md-5 me-3" to="/rooms">Our Rooms</Link>
                                    <a class="btn btn-light py-md-3 px-md-5" href="tel:04865 230212">Enquiry</a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="video">
                                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Video Canva Link: https://www.canva.com/design/DAFkYE4KRA0/BB_Ux1fA5Ex-sPYquE-qVA/edit */}
                    {/* <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                                <div class="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe loading="lazy"
                                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFkYE4KRA0&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Service Start */}
                    <div class="container-xxl py-5">
                        <div class="container">
                            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 class="section-title text-center text-primary text-uppercase">Our Services</h6>
                                <h1 class="mb-5">Explore Our <span class="text-primary text-uppercase">Services</span></h1>
                            </div>
                            <div class="row g-4">
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <a class="service-item rounded" >
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-hotel fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Rooms</h5>
                                        {/* <p class="text-body mb-0">We provide clean and hygienic rooms. The entire mattress is heat treated to eliminate stress and is made up of a high density form and pad.</p> */}
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <a class="service-item rounded" >
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-utensils fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Food & Restaurant</h5>
                                        {/* <p class="text-body mb-0">We have a Restaurant in the ground floor. Tastefully designed restaurant serves vegetarian and non vegetarian food of lndian, Chinese and continental delicacies. </p> */}
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-bicycle fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Bicycle rent</h5>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-motorcycle fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Two wheeler rent</h5>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-hiking fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Trekking</h5>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-campground fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Camping</h5>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-luggage-cart fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Travel desk</h5>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-binoculars fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Sight seeing trips</h5>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                                    <a class="service-item rounded">
                                        <div class="service-icon bg-transparent border rounded p-1">
                                            <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i class="fa fa-tractor fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 class="mb-3">Plantation visit</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service End */}

                    <Testimonial />

                    <div class="col-md-12">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.21558370092686!2d77.06298249658994!3d10.074822953443903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079973ed08947b%3A0xeae768e6ab20be85!2sCapital%20O%20Hotel%20Sn!5e0!3m2!1sen!2sin!4v1685362035043!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight:'350px', marginTop:'10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    {/* Back to Top */}
                    {window.pageYOffset !== 0 ?
                        <>
                            <a onClick={handleCall} class="btn btn-lg btn-primary btn-lg-square back-to-top phone"><i class="fa fa-phone"></i></a>
                            <a href="https://wa.me/+918075190680" class="btn btn-lg btn-primary btn-lg-square back-to-top whatsapp"><i class="fab fa-whatsapp"></i></a>
                            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fas fa-chevron-up"></i></a>
                        </>
                        : null
                    }
                </div>
            </Layout>
        </>
    )
}

export default Home