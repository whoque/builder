import React from 'react';
import styles from './FormItem.module.css';

const FormItem = (props) => {
    const style = {};
    if(props.error && props.error[props.fname]) {
        style.border = "1px solid #ff9b9b";
        style.boxShadow = "0px 0px 3px #ff9b9b";
    }
    return props.isTextArea ? (
        <div className={styles.FormItem}>
            <label>{props.label}</label>
            <textarea autoComplete="off" style={style} name={props.fname} ref={props.reference}></textarea>
        </div>
    )
    :(
        <div className={styles.FormItem}>
            <label>{props.label}</label>
            <input autoComplete="off" style={style} name={props.fname} type={props.type} ref={props.reference} />
        </div>
    )
}

export default FormItem;
