import React from 'react'
import one from '../images/Gallery/IMG-20240402-WA0003.jpg'
import two from '../images/Gallery/IMG-20240402-WA0004.jpg'
import three from '../images/Gallery/IMG-20240402-WA0005.jpg'
import four from '../images/Gallery/IMG-20240402-WA0006.jpg'
import five from '../images/Gallery/IMG-20240402-WA0007.jpg'
import six from '../images/Gallery/IMG-20240402-WA0008.jpg'
import seven from '../images/Gallery/IMG-20240402-WA0010.jpg'
import eight from '../images/Gallery/IMG-20240402-WA0011.jpg'
import nine from '../images/Gallery/IMG-20240402-WA0012.jpg'
import ten from '../images/Gallery/IMG-20240402-WA0013.jpg'
import eleven from '../images/Gallery/IMG-20240409-WA0002.jpg'
import twele from '../images/Gallery/IMG-20240409-WA0003.jpg'
import thirteen from '../images/Gallery/IMG-20240409-WA0004.jpg'
import forteen from '../images/Gallery/IMG-20240409-WA0007.jpg'
import Navbar from '../components/Navbar'

const Gallery = () => {
    return (
        <div className='bgGallery'>
<Navbar/>

            <div className='container '>
                <div className="row "></div>
                <div className="row Gallery">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                        <img
                            src={one}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat"
                        />
                        <img
                            src={two}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={three}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                        <img
                            src={four}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={five}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />
                        <img
                            src={six}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>





                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                        <img
                            src={seven}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat"
                        />
                        <img
                            src={eight}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={nine}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                        <img
                            src={ten}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    
                    


                    
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                        <img
                            src={eleven}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat"
                        />
                        <img
                            src={twele}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    
                    
                    
                    
                    </div>
            </div>



            <div className="text-center mt-5 text-muted">
                  Copyright &copy; 2024 &mdash; SayCheese
                </div>


        </div>
    )
}

export default Gallery