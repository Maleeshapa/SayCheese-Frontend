import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Category = () => {

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="bgCategory">
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <div className="col">
            <h1 className="text-center" id="categoryh1"></h1>
          </div>
        </div>

        <div className='items row justify-content-center'>
          <div className="col-md-4 mt-3">
            <div className="card text-center  fade-up ">
              <img src="https://i.ibb.co/Q8YFFGN/420069060-365087926253283-613338350869564067-n.jpg" className="card-img-top" alt="potrait" />
              <div className="card-body">
                <h5 className="card-title">Portrait Photography</h5>
                <p className="card-text">capturing the personality of<br />individuals or groups.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleLinkClick('https://wa.link/gh0s8z')}>
                  Contact for Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card text-center  fade-up " style={{ animationDelay: '0.5s' }}>
              <img src="https://i.ibb.co/SvY0jtS/420093588-369151105846965-4746349152919470139-n.jpg" className="card-img-top" alt="wedding" />
              <div className="card-body">
                <h5 className="card-title">Wedding Photography</h5>
                <p className="card-text">Capturing the special moments<br />of weddings.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleLinkClick('https://wa.link/9dvj8q')}>
                  Contact for Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card text-center  fade-up " style={{ animationDelay: '1s' }}>
              <img src="https://i.ibb.co/Gx165FB/424904914-383617107733698-6800591483326445864-n.jpg" className="card-img-top" alt="street" />
              <div className="card-body">
                <h5 className="card-title">Street Photography</h5>
                <p className="card-text">capturing candid moments of <br />everyday life in public spaces.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleLinkClick('https://wa.link/ejfjj0')}>
                  Contact for Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='row justify-content-center bookbtn fade-up ' style={{ animationDelay: '1.5s' }}>
          <div className="col-sm-4">
            <Link type="button" className="btn btn-danger" to='/Booking'>Book Now</Link>
          </div>
        
        </div>  <br />
      </div>
    </div>
  );
}

export default Category;
