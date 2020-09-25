import React from 'react';
import styles from './CardHeaderInfo.module.css';

const CardHeaderInfo = (props) => {
    return (
        <div className={styles.cardHeaderInfo}>
            <div className={styles.cardHeaderInfo__value}>{props.value}</div>
            <div className={styles.cardHeaderInfo__title}>{props.title}</div>
        </div>
    )
}

export default CardHeaderInfo;
