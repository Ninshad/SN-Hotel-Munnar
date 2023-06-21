import React from 'react'
import Layout from '../Components/Layout'
import RoomsComponent from '../Components/Rooms';

const Rooms = () => {
    const handleCall = () =>{
        window.open('tel:+91 9048872111');
    }
    
  return (
    <Layout>
        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url('/Images/rooms/r1-lg.jpg')"}}>
            <div class="container-fluid page-header-inner rooms-py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <RoomsComponent/>

<a onClick={handleCall} class="btn btn-lg btn-primary btn-lg-square back-to-top other-page-phone"><i class="fa fa-phone"></i></a>        
<a href="https://wa.me/+918075190680" class="btn btn-lg btn-primary btn-lg-square back-to-top-other-pages whatsapp"><i class="fab fa-whatsapp"></i></a>
    </Layout>
  )
}

export default Rooms