import React, { useEffect } from 'react'
import Layout from '../Components/Layout'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleCall = () => {
        window.open('tel:+91 9048872111');
    }

  return (
    <Layout>
        <div class="container-fluid page-header mb-5 p-0"  style={{backgroundImage: "url('/Images/front/sn-front.jpg')"}}>
            <div class="container-fluid page-header-inner contact-py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <div class="container-xxl contact-py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Contact Us</h6>
                    <h1 class="mb-5"><span class="text-primary text-uppercase">Contact</span> For Any Query</h1>
                </div>
                <div class="row g-4">
                    {/* <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Booking</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">General</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Technical</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                            </div>
                        </div>
                    </div> */}
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <div contact-phone>
                            <h6 class="section-title text-start text-primary text-uppercase">Phone</h6> <br/>
                                <i class="fa fa-phone-alt text-primary me-2"></i>04865 230212<br/>&nbsp; &nbsp; &nbsp;04865 230312<br/>
                                <i class="fas fa-mobile-alt text-primary me-2"></i>&nbsp;8075190680<br/>&nbsp; &nbsp; &nbsp;9048872111
                            </div>
                            <div className='contact-email'>
                            <h6 class="section-title text-start text-primary text-uppercase">Email</h6> <br/>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>team@snmunnar.com</p> <br/>
                            </div>
                            <div className='contact-adress'>
                            <h6 class="section-title text-start text-primary text-uppercase">Adress</h6> <br/>
                                <i class="fa fa-map-marker-alt text-primary me-2"></i> Hotel SN <br/>  &nbsp; &nbsp; &nbsp;Kanan Devan Hills <br/>
                                &nbsp; &nbsp; &nbsp;A.M. Road, Moolakadai,<br/>
                                &nbsp; &nbsp; &nbsp;Munnar, Idukki, Kerala,<br/>
                                &nbsp; &nbsp; &nbsp;S.India - 685612 <br/>
                            </div>
                        
                        
                        
                            {/* <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>

                      {/* <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.21558370092686!2d77.06298249658994!3d10.074822953443903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079973ed08947b%3A0xeae768e6ab20be85!2sCapital%20O%20Hotel%20Sn!5e0!3m2!1sen!2sin!4v1685362035043!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight:'350px', marginTop:'10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div> */}
                      <div class="col-md-6">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.21558370092686!2d77.06298249658994!3d10.074822953443903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079973ed08947b%3A0xeae768e6ab20be85!2sCapital%20O%20Hotel%20Sn!5e0!3m2!1sen!2sin!4v1685362035043!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight:'350px', marginTop:'10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                </div>
            </div>
        </div>

        <a onClick={handleCall} class="btn btn-lg btn-primary btn-lg-square back-to-top other-page-phone"><i class="fa fa-phone"></i></a>
        <a href="https://wa.me/+91 8075190680" class="btn btn-lg btn-primary btn-lg-square back-to-top-other-pages whatsapp"><i class="fab fa-whatsapp"></i></a>
    </Layout>
  )
}

export default Contact