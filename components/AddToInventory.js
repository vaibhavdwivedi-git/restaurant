import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const AddToInventory = ({ setClose }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCreate = async () => {
    try {
      const newIngredient = {
        name,
        amount,
      };
      console.log(newIngredient);
      await axios.post(
        "https://restaurant-three-beige.vercel.app/inventory",
        newIngredient
      );
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add an ingredient</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Ingredient Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Amount</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AddToInventory;
