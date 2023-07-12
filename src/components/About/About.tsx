import styles from './About.module.css'
import logo from "../../assets/logo.png"


const About = () => {
  return (
    <section id="about"
             className={`${styles["about"]} ${styles["newsection"]}`}>
        <header data-aos="fade-up"
                className="flex"
                style={{ padding: "0 0 0 10%"}}>
            <h2 data-aos="fade-up">What is Robionics ?
            </h2>

        </header>
        <div className={`${styles["aboutMain"]} flex items-center`}
             style={{ height: '75%'}}>
            <div data-aos="fade-right" className={`${"aboutLogo"} flex flex-center`} style={{width: "75%"}}>
                <img src={logo}
                     width="50%"
                     alt="" />
            </div>
            <div  data-aos="fade-right" data-aos-delay="100" className={`${styles["aboutDescription"]} flex flex-col gap`}>
                <p>Robotics and Aviation club is the official club comprised and managed by the students of Shri Ramdeobaba College of Engineering and Management Nagpur. We are a dedicated group of undergrads with the primary objective of fostering a deep passion for robotics and aviation.</p>
                <p>
                    Through a diverse range of activities, we strive to inspire innovation, encourage collaboration, and facilitate hands-on learning experiences.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About