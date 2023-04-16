import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = ({ findus }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0123456789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/admin" passHref>
            <li className={styles.listItem}>Dishes</li>
          </Link>

          <Link href="/admin" passHref>
            <li className={styles.listItem}>Orders</li>
          </Link>

          <Link href="/" passHref>
            <li className={styles.logo}>Savoury Taste</li>
          </Link>
          <Link href="/admin/inventory" passHref>
            <li className={styles.listItem}>Inventory</li>
          </Link>

          <li className={styles.listItem} onClick={findus}>
            Find Us
          </li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
