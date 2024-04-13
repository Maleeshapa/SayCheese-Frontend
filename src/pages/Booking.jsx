import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Booking() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    nic: '',
    type: '',
    message: '',
  });
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Booking', values)
      .then(res => {
        console.log(res);
        setBookingStatus('success');
      })
      .catch(err => {
        console.log(err);
        setBookingStatus('error');
      });
  };

  return (
    <div className='bgBooking'>
      <Navbar />
      <div className='container'>
        <div className="row ">
          <div className='col-md-7 bookForm fade-up'>
            <p className='bookingH1'>Shashini Rathnayake</p>
          </div>
          <div className='col-md-5 bookForm formBook fade-up' style={{ animationDelay: '0.5s' }} >
            <div className="border rounded p-4 ">
              <h3>Hurry! Book Your Day.</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group row mb-4 mt-4">
                  <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="Your Name"  onChange={e => setValues({ ...values, name: e.target.value })} />
                  </div>
                </div>

                <div className="form-group row mb-4">
                  <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email"  onChange={e => setValues({ ...values, email: e.target.value })} />
                  </div>
                </div>

                <div className="form-group row mb-4">
                  <label htmlFor="nic" className="col-sm-2 col-form-label">NIC:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="nic" placeholder="Your NIC"  onChange={e => setValues({ ...values, nic: e.target.value })} />
                  </div>
                </div>



                <div className="form-group row mb-4">
                  <label htmlFor="type" className="col-sm-2 col-form-label">Type:</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="type" name="type" required  onChange={e => setValues({ ...values, type: e.target.value })} >
                      <option value="">Select Photography Type</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="street">Street Photography</option>
                    </select>
                  </div>
                </div>


               
                <div className="form-group row mb-4">
                  <label htmlFor="message" className="col-sm-2 col-form-label">Message:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="message" name="message" rows="2"  onChange={e => setValues({ ...values, message: e.target.value })} ></textarea>
                  </div>
                  </div>
                <button type="submit" className="btn btn-primary">Confirm</button> {'  '}
                <button type="reset" className="btn btn-secondary">Clear</button>
                {' '}
                 
              </form>
              <br />
              {/* Alert message */}
              {bookingStatus && (
                <div className="message">
                  {bookingStatus === 'success' ? (
                    <div>
                    <div className="alert alert-success" role="alert">
                      Booking is done.
                      </div>
                      <div className="alert alert-danger" role="alert">
                      If you change your mind,  <Link to="/Login">log in</Link> to cancel booking.
                    </div>
                      </div>
                    
                  ) : (
                    <div>
                    <div className="alert alert-success" role="alert">
                      {`Welcome Back ${values.name}! Booking is done.`}
                    </div>
                    <div className="alert alert-danger" role="alert">
                      If you change your mind,  <Link to="/Login">log in</Link> to cancel booking.
                    </div>
                  </div>
                    
                    
                  )}
                </div>
              )}
             <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;