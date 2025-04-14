import React from 'react'
import styles from './template.module.css'

const Template = ({title, paragraph}) => {
  return (
    <section className={styles.template}>
        <div className={styles.templateWrapper}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </section>
  )
}

export default Template