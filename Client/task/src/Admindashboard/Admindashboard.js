import React from 'react'
import AdminSlider from './AdminSlider'
import {Outlet} from 'react-router-dom';

const Admindashboard = () => {
  return (
    <div className="admin-dashboard" >
    <section >
      <div className="dashboard-container">
        <div className="row" >
          <div className="col-md-4 sidebar">
            <AdminSlider/>
          </div>
          <div className="col-md-8 bg" >
            <div className="content-area" >
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Admindashboard