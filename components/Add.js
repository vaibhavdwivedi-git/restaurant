import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState();

  const [ingredient, setIngredient] = useState([]);
  const [ingredientsEntry, setIngredientsEntry] = useState(null);

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleIngredientsEntry = (e) => {
    setIngredientsEntry({
      ...ingredientsEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredients = (e) => {
    setIngredient((prev) => [...prev, ingredientsEntry]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmys2eu1b/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        price,
        ingredient,
        img: url,
      };
      console.log(newProduct);
      await axios.post(
        "https://restaurant-three-beige.vercel.app/api/products",
        newProduct
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
        <h1>Add a new Dish</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Price</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              onChange={(e) => changePrice(e, 0)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Ingredient</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="name"
              onChange={handleIngredientsEntry}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Amount in g"
              name="amount"
              onChange={handleIngredientsEntry}
            />
            <button className={styles.extraButton} onClick={handleIngredients}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {ingredient.map((option) => (
              <span key={option.name} className={styles.extraItem}>
                {option.name}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
