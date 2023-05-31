import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Rooms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const isRoom = window.location.pathname === '/rooms' 

    const roomsData = [
        {
            img:"/Images/rooms/thumb/r1.jpg"
        },
        {
            img:"/Images/rooms/thumb/r2.jpg"
        },
        {
            img:"/Images/rooms/thumb/r3.jpg"
        },
        {
            img:"/Images/rooms/thumb/r4.jpg"
        },
        {
            img:"/Images/rooms/thumb/r5.jpg"
        },
        {
            img:"/Images/rooms/thumb/r6.jpg"
        },
        {
            img:"/Images/rooms/thumb/r7.jpg"
        },
        {
            img:"/Images/rooms/thumb/r8.jpg"
        },
        {
            img:"/Images/rooms/thumb/r9.jpg"
        },
    ]

  return (
    <>
    <div class={isRoom? "container-xxl rooms-py-5" : "container-xxl room-home-py-5"} >
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                    <h1 class="mb-5">Explore Our <span class="text-primary text-uppercase">Rooms</span></h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r1.jpg" alt=""/>
                                {/* <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">₹1500/Day</small> */}
                            </div>
                            {/* <div class="p-4 mt-2">
                                <div class="d-flex justify-content-between mb-3">
                                    <h5 class="mb-0">Junior Suite</h5>
                                    <div class="ps-2">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>Double</small>
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i>1 Bath</small>
                                    <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p class="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <div class="d-flex-enq-button justify-content-between">
                                    <a class="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a> 
                                    <a class="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a> 
                                    <a class="btn btn-sm btn-primary rounded py-2 px-4" href="tel:04865 230212">Enquiry</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r5.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r6.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                    {/* {isRoom? roomsData.map((data) =>
                    
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src={data.img} alt=""/>
                            </div>
                        </div>
                    </div>
                    )
                    : null
                    } */}
                      <div class="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop:'50px' }}>
                          <h1 class="mb-5">Heat Treated <span class="text-primary text-uppercase">Mattress</span></h1>
                      </div>

                      <div>
                          <p class="mb-4 wow fadeInUp" style={{ marginBottom: '35px!important', marginTop:'-50px' }} data-wow-delay="0.1s">
                              The entire mattress is heat treated to eliminate stress and is made up of a high density form and pad.
                          </p>
                          <div class="row wow fadeInUp" data-wow-delay="0.3s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="/Images/rooms/r1-bed.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                      </div>




                    {!isRoom?
                          <div class="col-lg-4 col-md-6 wow fadeInUp room-more" data-wow-delay=".8s">
                              <div class="home-room-more">
                                <Link class="btn btn-primary py-3 px-5 mt-2" to={'/rooms'} >Explore More</Link>
                              </div>
                          </div>
                    :null}
                </div>
            </div>
        </div>
    </>
  )
}

export default Rooms