import styles from './blue.module.css';

const Blue = (props, link) => {
  return (
    <div>
      <a href={link} className={styles.blue} {...props}></a>
    </div>
  )
}

export default Blue;
