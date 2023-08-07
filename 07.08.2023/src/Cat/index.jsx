import styles from "./styles.module.css";

const Cat = ({ deleteCat, src }) => {
  return (
    <img
      onClick={deleteCat}
      className={styles.cat}
      src={src}
      alt="cat_picture"
    />
  );
};

export default Cat;

// https://cataas.com/cat/
