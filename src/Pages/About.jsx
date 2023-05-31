import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import AboutComponent from '../Components/About'
import Testimonial from '../Components/Testimonial';

const About = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCall = () =>{
        window.open('tel:+91 9048872111');
    }

    return (
        <>
            <Layout>
                <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url('/Images/about/about1-crop.jpg')" }}>
                    <div class="container-fluid page-header mb-5 p-0" >
                        <div class="container-fluid page-header-inner about-py-5">
                            <div class="container text-center pb-5">
                                <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center text-uppercase">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <AboutComponent />

                <Testimonial />

                <a onClick={handleCall} class="btn btn-lg btn-primary btn-lg-square back-to-top other-page-phone"><i class="fa fa-phone"></i></a>
                <a href="https://wa.me/+91 8075190680" class="btn btn-lg btn-primary btn-lg-square back-to-top-other-pages whatsapp"><i class="fab fa-whatsapp"></i></a>

            </Layout>
        </>
    )
}

export default About