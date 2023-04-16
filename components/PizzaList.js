import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ dishList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to our Savoury Taste</h1>
      <p className={styles.desc}>
        Our menu offers a wide range of options, from classic favorites to
        unique and creative dishes that will satisfy your taste buds. We believe
        in providing our customers with a memorable dining experience, whether
        you choose to dine in or order online.
      </p>
      <div className={styles.wrapper}>
        {dishList.map((dish) => (
          <PizzaCard key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
