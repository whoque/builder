import React from 'react';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import FormItem from './FormItem/FormItem';
import { connect } from 'react-redux';
import { updateBuilder, addBuilder } from '../../../store/actions/builderActions';
import { useParams  } from "react-router-dom";

const Form = (props) => {
    const { id } = useParams();
    const defaultFormvalues = props.forEdit ? props.value : undefined;
    const { register, handleSubmit, errors} = useForm({
        defaultValues: defaultFormvalues
    });
    const onSubmit = (data) => {
        const payload = {
            logo: data.dLogo,
            imgURL: data.pImage,
            imgTitle: data.pName,
            title: data.dName,
            totalExp: data.experience,
            totalProjects: data.pCount,
            desc: data.pDescription,
            location: data.pLocation,
            id: props.forEdit ? Number(id) : create_UUID()
        }
        if(props.forEdit) {
            props.updateBuilder(Number(id), payload);
        } else {
            props.addBuilder(payload);
        }
    }
    const buttonName = props.forEdit ? "UPDATE" : "CREATE";
    const create_UUID = () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c==='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
    return (
        <div className={styles.form}>
            <div className={styles.title}>Featured <span>Developers</span></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormItem
                    fname="dLogo"
                    isTextArea={false}
                    type="text"
                    label="Developer Logo Image url"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="dName"
                    isTextArea={false}
                    type="text"
                    label="Developer Name"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="experience"
                    isTextArea={false}
                    type="number"
                    label="Years of Experience"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="pCount"
                    isTextArea={false}
                    type="number"
                    label="Projects count"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="pDescription"
                    isTextArea={true}
                    label="Description"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="pName"
                    isTextArea={false}
                    type="text"
                    label="Project name"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="pLocation"
                    isTextArea={false}
                    type="text"
                    label="Project location"
                    reference={register({required: true})}
                    error={errors} />
                <FormItem
                    fname="pImage"
                    isTextArea={false}
                    type="text"
                    label="Project image url"
                    reference={register({required: true})}
                    error={errors} />
                <input type="submit" value={buttonName} />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    updateBuilder: (id, updatedBuilder) => dispatch(updateBuilder(id, updatedBuilder)),
    addBuilder: (builder) => dispatch(addBuilder(builder))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
