import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpeg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            SATISFY YOUR CRAVINGS WITH OUR SAVOURY DELIGHTS
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            535, Civilines Road
            <br /> Roorkee, Uttrakhand
            <br /> +91-1234512345
          </p>
          <p className={styles.text}>
            64, Mainwati Marg
            <br /> Kanpur, Uttar Pradesh
            <br /> +91-1234567890
          </p>
          <p className={styles.text}>
            78, Mcleodganj Road
            <br /> Kanpur, Uttar Pradesh
            <br /> +91-4564567890
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MON - FRI
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SAT - SUN
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
