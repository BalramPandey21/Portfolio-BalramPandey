import styles from './Home.module.css'
import image from '../../Resources/BP_pick.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const Home=()=>{
return(<div className={styles['Home-wrapper']}>

    <div className={styles['Home-description-wrapper']}>
    <p className={styles["para"]}><span className={styles['name-span']}>I am Balram Pandey </span>a dedicated Full Stack Developer specializing in the <span className={styles['degignation-span']}>MERN Stack</span>.
    With a strong educational background and hands-on experience in software development,
    I am committed to building innovative applications that enhance user experiences and streamline processes</p>
    <div className={styles['social-media-links']}>
        <div className={styles['social-media-icon']}><a href='https://github.com/BalramPandey21' target="_blank" className={styles['a-tag']}><IoLogoGithub size={30}/></a></div>
        <div className={styles['social-media-icon']}><a href='https://www.linkedin.com/in/balram-pandey-7901932b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className={styles['a-tag']}><FaLinkedinIn size={30}/></a></div>
    </div>
    </div>
    <div className={styles['Home-image-wrapper']}>
        <img src={image}  alt='background' className={styles['Background-image']}></img>
    </div>
</div>)
}
export default Home;