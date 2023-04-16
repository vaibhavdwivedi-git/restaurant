import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Inventory.module.css";
import AddButton from "../../components/AddButton";
import AddToInventory from "../../components/AddToInventory";

const Index = ({ inventory }) => {
  const [ingredientList, setIngredientList] = useState(inventory);
  const [close, setClose] = useState(true);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/inventory/" + id
      );
      setIngredientList(
        ingredientList.filter((ingredient) => ingredient._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <AddButton setClose={setClose}>Add new ingredient</AddButton>
        <h1 className={styles.title}>Inventory</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Title</th>
              <th>Remaining</th>
              <th>Action</th>
            </tr>
          </tbody>
          {ingredientList.map((ingredient) => (
            <tbody key={ingredient._id}>
              <tr className={styles.trTitle}>
                <td>{ingredient._id.slice(0, 5)}...</td>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleUpdate(ingredient._id)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(ingredient._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {!close && <AddToInventory setClose={setClose} />}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const inventoryRes = await axios.get("http://localhost:3000/api/inventory");

  return {
    props: {
      inventory: inventoryRes.data,
    },
  };
};

export default Index;
