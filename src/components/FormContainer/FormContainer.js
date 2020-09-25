import React, { useEffect } from 'react';
import Form from './Form/Form';
import { connect } from 'react-redux';
import { fetchBuilders } from '../../store/actions/builderActions';
import { useParams  } from "react-router-dom";

const FormContainer = ({fetchBuilders, builderReducer}) => {
    const { id } = useParams();
    let forEdit = (id !== "new");
    let defaultFormValue = null;
    if(forEdit && builderReducer && builderReducer.result) {
        const selectedBuilder = builderReducer.result.find(el => el.id === Number(id));
        defaultFormValue = {
            dLogo: selectedBuilder.logo,
            dName: selectedBuilder.title,
            experience: selectedBuilder.totalExp,
            pCount: selectedBuilder.totalProjects,
            pDescription: selectedBuilder.desc,
            pName: selectedBuilder.imgTitle,
            pLocation: selectedBuilder.location,
            pImage: selectedBuilder.imgURL
        }
    }
    useEffect(() => {
        if(forEdit && (builderReducer && builderReducer.results && builderReducer.results.lenght)) {
            fetchBuilders();
        }
    }, [builderReducer, fetchBuilders, forEdit]);
    return (defaultFormValue || !forEdit) ? (
        <div>
            <Form forEdit={forEdit} value={defaultFormValue} />
        </div>
    ): null
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    fetchBuilders: () => dispatch(fetchBuilders())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
