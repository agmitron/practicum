import styles from './styles.module.css'
const Good = ({ title, img, onClick, price }) => {
  return <div className={styles.good}>
    <img className={styles.img} src={img} alt={title} />
    <h2 className={styles.title}>{title}</h2>
    <h3 className={styles.price}>{price}</h3>
    <button onClick={onClick}>Buy!</button>
  </div>
}

export default Good