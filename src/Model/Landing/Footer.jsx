import React from 'react'
import styles from './landing.module.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className= {styles.container2}>
        <ul className={styles.list}>
          <li>Jobs</li>
          <li>Browser Jobs</li>
          <li>Post a Job</li>
        </ul>
      
        <ul className={styles.list}>
          <li>Signin Options</li>
          <li>User</li>
          <li><Link to="/employer/auth">Employer</Link></li>
        </ul>

        <div>
          <h2>SKILLMATCH</h2>
          <h4 className={styles.contact}>Contact</h4>
        </div>

        <div className= {styles.Creator}>
          <p>Made with 🖤 by Aiman Jan</p>
        </div>
      </div>
    
  )
}
export default  Footer
