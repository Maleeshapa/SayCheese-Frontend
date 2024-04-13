import React from 'react';
import Navbar from '../components/Navbar';

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className='bgAdmin'>

        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="card shadow-lg" style={{ marginTop: '100px' }}>
                  <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4">Admin Login</h1>

                    <form method="POST" className="needs-validation" noValidate autoComplete="off">

                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                        <input id="email" type="email" className="form-control" name="email" value="" required autoFocus />
                        <div className="invalid-feedback">
                          Email is invalid
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2 w-100">
                          <label className="text-muted" htmlFor="password">Password</label>
                        </div>
                        <input id="password" type="password" className="form-control" name="password" required />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        
                        <button type="submit" className="btn btn-primary ms-auto">
                          Login
                        </button>
                      </div>
                    </form>

                  </div>

                  
                </div>

                <div className="text-center mt-5 text-muted">
                  Copyright &copy; 2024 &mdash; SayCheese
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admin;
