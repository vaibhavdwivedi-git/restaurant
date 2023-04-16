import styles from "../styles/Add.module.css";

const AddButton = ({ setClose, children }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      {children}
    </div>
  );
};

export default AddButton;
