import React from 'react';
import styles from './CardImage.module.css';

const CardImage = (props) => {
    return (
        <div className={styles.cardImage}>
            <div className={styles.cardImage__title}>{props.builder.imgTitle}</div>
            <div className={styles.cardImage__image}>
                <img alt="" src={props.builder.imgURL} />
                <div className={styles.cardImage__imageInfo}>
                    <div className={styles.cardImage__imageTitle}>{props.builder.imgTitle}</div>
                    <div className={styles.cardImage__imageLocation}>{props.builder.location}</div>
                </div>
            </div>
        </div>
    )
}

export default CardImage;
