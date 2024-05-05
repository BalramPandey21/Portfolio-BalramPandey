import styles from './AboutMe.module.css';
import image from '../../Resources/BP_linkedin.jpg'
const AboutMe=()=>{
    return(<div className={styles['About-wrapper']}>
        <div className={styles['About-me-wrapper']} ><div className={styles['About-heading']}>About&nbsp;</div><div className={styles['me-heading']}>Me</div></div>
        <div className={styles['About-me-image-wrapper']}><img src={image}alt='' className={styles['About-image']} width={100} height={150}/></div>
        <div className={styles['Mern-div']}>MERN Developer !</div>
        <div className={styles['bio-div']}>
            <div className={styles['bio-div-first']}>
                Name -: Balram Pandey <br/> DOB -: 22-05-1997 <br/> City -: Mathura
            </div>
            <div className={styles['bio-div-first']}>
              Email -: balrampandey73@gmail.com <br/> Mobile No. -: 8218933360  
            </div>
        </div>
    </div>)
}
export default AboutMe;