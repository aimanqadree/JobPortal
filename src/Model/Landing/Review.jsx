import React from 'react'
import styles from './landing.module.css'
function Review() {
  return (
    <div className= {styles.top}>
      <h1 className={styles.headingreview}>Find the career you deserve</h1>

      <div className={styles.parentreview}>

        <div className={styles.box1}>
          <p className={styles.para}> "SkillMatch is user-friendly and has a vast database of job listings. However, Sometimes it can be challenging to get in touch with recruiters directly."</p>
            <h4 className={styles.h4review}>- Abishek Newar</h4>
        </div>

        <div className={styles.box1}>
          <p className={styles.para}>"SkillMatch is excellent for salary insights and company reviews. It helps set realistic salary expectations but lacks some entry-level job listings."</p>
          <h4 className={styles.h4review}>- Pooja Sharma</h4>
        </div>

        <div className={styles.box1}>
          <p className={styles.para}>"SkillMatch offers a streamlined application process and excellent job matching algorithms. It's great for finding jobs."</p>
          <h4 className={styles.h4review}>- John Das</h4>
        </div>

       <div className={styles.box1}>
        <p className={styles.para}>"In SkillMatch the resume builder is incredibly helpful and the AI suggestions improved my resume significantly. I just wish there were more remote job options in my field."</p>
        <h4 className={styles.h4review}>- Priya Patel</h4>
       </div>

      </div>
    </div>
  )
}
export default Review
