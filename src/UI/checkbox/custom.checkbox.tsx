import {FC, useState, HTMLAttributes} from 'react';

import styles from './custom.checkbox.module.css';
import Form from 'react-bootstrap/Form';

interface ICustomCheckbox extends HTMLAttributes<HTMLInputElement> {
    name: number;
    handleSelect: (value: boolean, id: number) => void;
    value: boolean;
}

const CustomCheckbox: FC<ICustomCheckbox> = (props) => {
       
    const handleCheckChange = () => {
        props.handleSelect(!props.value, props.name)
    }

    return <>
        <Form.Check className={styles.checkStyle} type="checkbox" 
               id={`${props.name}-checkbox`}
               name={`${props.name}`}
               checked={props.value} 
               onChange={handleCheckChange}
        />
    </>
}

export default CustomCheckbox;