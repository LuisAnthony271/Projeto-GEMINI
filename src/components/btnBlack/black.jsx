import styles from './black.module.css';

const Black = (props, link) => {
  return (
    <div className={styles.btnWrapper}>
      <a href={link} className={styles.black} {...props}></a>
    </div>
  )
}

export default Black;
