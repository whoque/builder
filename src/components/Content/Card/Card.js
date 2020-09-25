import React from 'react';
import styles from './Card.module.css';
import CardHeader from './CardHeader/CardHeader';
import CardImage from './CardImage/CardImage';
import editLogo from '../../../assets/edit.png';
import deleteLogo from '../../../assets/delete.png';
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

const Card = (props) => {
    const alert = useAlert();
    let history = useHistory();

    const handleDelete = () => {
        props.delete(props.builder.id);
        alert.show("Removed");
    }

    const handleEdit = () => {
        history.push(`${props.builder.id}`);
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.curtain}>
                <button onClick={handleEdit}>
                    <img alt="" src={editLogo} />
                    <span>Edit</span>
                </button>
                <button onClick={handleDelete}>
                    <img alt="" src={deleteLogo} />
                    <span>Delete</span>
                </button>
            </div>
            <div className={styles.card}>
                <CardHeader builder={props.builder} />
                <p>{props.builder.desc}</p>
                <CardImage builder={props.builder} />
            </div>
        </div>
    )
}

export default Card;
