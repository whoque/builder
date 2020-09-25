import React from 'react';
import styles from './CardHeader.module.css';
import CardHeaderInfo from './CardHeaderInfo/CardHeaderInfo';

const CardHeader = (props) => {
    return (
        <div className={styles.cardHeader}>
            <div className={styles.cardHeader__image}>
                <img alt="" src={props.builder.logo} />
            </div>
            <div className={styles.cardHeader__text}>
                <div className={styles.cardHeader__text__title}>{props.builder.title}</div>
                <div className={styles.cardHeader__text__stat}>
                    <div className="stat__year">
                        <CardHeaderInfo value={props.builder.totalExp} title="Years Exp." />
                    </div>
                    <div className="stat__project">
                        <CardHeaderInfo value={props.builder.totalProjects} title="Projects" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader;
