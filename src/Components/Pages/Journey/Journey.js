import React from 'react';
import Styles from './Journey.module.css';

export default function Journey() {
  return (
    <>
    <div className={Styles['myJourney-heading']}> My Journey</div>
    <div className={Styles['journey-wrapper']}>
        <div className={Styles['education-wrapper']}>
        <div className={Styles['journey-heading']} >Education</div>
        <div className={Styles['journey-box']}>
        <div className={Styles['calender-div']}>📅 2021-2023</div>
        <div className={Styles['education-title-div']}>Master of Computer Applications</div>
        <div className={Styles['education-description-div']}>I Completed MCA from GLA University , Mathura  </div>
        </div>
        <div className={Styles['journey-box']}>
        <div className={Styles['calender-div']}>📅2015-2018</div>
        <div className={Styles['education-title-div']}>Bachelor Of Science (Computer Science)</div>
        <div className={Styles['education-description-div']}>I Completed Bsc(cs) from Rajiv Academy for technology and   </div>
        </div>
        <div className={Styles['journey-box']}>
        <div className={Styles['calender-div']}>📅 2014-2015</div>
        <div className={Styles['education-title-div']}>Intermediate</div>
        <div className={Styles['education-description-div']}>I Completed Intermediate from V.V. Inter Collage </div>
        </div>
        <div className={Styles['journey-box']}>
        <div className={Styles['calender-div']}>📅 2011-2012</div>
        <div className={Styles['education-title-div']}>High School </div>
        <div className={Styles['education-description-div']}>I Completed from P.D.D. Saraswati Vidya Mandir </div>
        </div>
        </div>
        <div className={Styles['education-wrapper']}>
        <div className={Styles['journey-heading']}>Experience</div>
        <div className={Styles['journey-box']}>
        <div className={Styles['calender-div']}>📅 2023-Now</div>
        <div className={Styles['education-title-div']}>Pinnacle civil services</div>
        <div className={Styles['education-description-div']}>I Complete My MCA from GLA University , Mathura  </div>
        </div>
        <div className={Styles['journey-heading']}>My Skills</div>
        <div className={Styles['journey-box']}>
        <div className={Styles['education-title-div']}>Front-End : HTML, CSS, Java Script , React.js</div>
        <div className={Styles['education-title-div']}>Back-End : Node.js, Express.js</div>
        <div className={Styles['education-title-div']}> Language : C , Python and Java</div>
        <div className={Styles['education-title-div']}> Databases: SQL and MongoDB</div>
        <div className={Styles['education-title-div']}>Amazon web services</div>
        <div className={Styles['education-title-div']}>GitHub</div>
        </div>
        </div>
          
    </div>
    </>
  )
}
