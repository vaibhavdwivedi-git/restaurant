import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ dish }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${dish._id}`} passHref>
        <Image src={dish.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{dish.title}</h1>
      <span className={styles.price}>${dish.price}</span>
      <p className={styles.desc}>{dish.desc}</p>
    </div>
  );
};

export default PizzaCard;
