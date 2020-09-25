import React, { useEffect } from 'react';
import styles from './Content.module.css';
import Card from './Card/Card';
import { connect } from 'react-redux';
import { deleteBuilder } from '../../store/actions/builderActions';

const Content = (props) => {

    useEffect(() => {
    }, []);

    const deleteBuilderHandler = (id) => {
        props.deleteBuilder(id);
    };

    return (
        <div>
            <ul className={styles.card__wrapper}>
                {   
                    (props.builderReducer && props.builderReducer.result ) ?
                    props.builderReducer.result.map(builder => {
                        return (
                            <li key={builder.id}>
                                <Card builder={builder} delete={deleteBuilderHandler} />
                            </li>
                        )
                    })
                    :
                    null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    deleteBuilder: (id) => dispatch(deleteBuilder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);
