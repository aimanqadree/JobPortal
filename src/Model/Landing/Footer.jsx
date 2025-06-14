// import React from 'react'
import styles from './landing.module.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className={styles.container2}>
      <ul className={styles.list}>
        <li>  <Link to="/jobs" className={styles.contact}>
          Jobs
        </Link></li>
      
        <Link to="/contact" className={styles.contact}>
          Contact
        </Link>
        <li><Link to="/employer/dashboard">Post a Job</Link></li>
      </ul>

      <ul className={styles.list}>
        <li><Link to="/auth" className={styles.contact}>
          Signin Options
        </Link></li>

        <li>{localStorage.getItem('token') && localStorage.getItem('type') === 'user'}
          <Link to="/user-profile" className={styles.contact}></Link>

          <Link to="/auth" className={styles.contact}>User</Link>
        </li>

        <li><Link to="/employer/auth">Employer</Link></li>
      </ul>

      <div>
        <h2>SKILLMATCH</h2>
        <p>
          <Link
            to="mailto:aimanqadree@gmail.com"
            target="_blank"
            className="text-white cursor-pointer hover:underline"
          >
            aimanqadree@gmail.com
          </Link>
        </p>
      </div>

      <div className={styles.Creator}>
        <p>© Copyright 2025 By <span className='text-[rgb(72,206,159)]'>Aiman Qadree</span>, All Rights Reserved.</p>
      </div>

    </div>

  )
}
export default Footer
