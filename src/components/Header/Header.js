import React from 'react';
import styles from './Header.module.css';
import { addBuilder } from '../../store/actions/builderActions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const addHandler = () => {
        history.push(`new`);
    }
    return (
        <div className={styles.header}>
            <div className="header__title">
                <div className={styles.title}>Featured <span className={styles.title__span}>Developers</span></div>
                <div className={styles.title__subtext}>Prominent developers in Bangalore</div>
            </div>
            <div className="header_button">
                <button onClick={addHandler} className={styles.button}>+ ADD NEW DEVELOPER</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    addBuilder: () => dispatch(addBuilder())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
