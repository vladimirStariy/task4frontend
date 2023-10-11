import { FC, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

import styles from './login.module.css';

interface IRegister {
    handleChange: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => void,
    handleRequest: () => void
    errorMessage: any
}

const Registration: FC<IRegister> = (props) => {
    return <div className={styles.loginContainer}>
        <div className={`mb-5 ${styles.loginTextHeader}`}>
            <h1>SIGN UP</h1>
        </div>
        <div className={styles.errorBlock}>{props.errorMessage ? props.errorMessage.data.message : ''}</div>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" name="name" placeholder="name" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="password" onChange={props.handleChange} />
        </Form.Group>
        <Button className="mb-2" onClick={props.handleRequest}>Sign up</Button>
    </div>
}

export default Registration;