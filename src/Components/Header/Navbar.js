
import styles from './Navbar.module.css'
const Navbar=()=>{
    return(
    <div className={styles["Navbar-wrapper"]}>
    <div className={styles["logo-name-wrapper"]}>
    <div className={styles["navbar-item"]}>Balram Pandey (Full Stack MERN Developer)</div>
    </div>
    <div className={styles["home-about-project-contect-wrapper"]}>
    <div className={styles["navbar-item"]}>Home</div>
    <div className={styles["navbar-item"]}>About Me</div>
    <div className={styles["navbar-item"]}>Projects</div>
    <div className={styles["navbar-item"]}>Contact</div>
    </div>
    </div>
    )
}
export default Navbar;