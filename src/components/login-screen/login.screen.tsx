import { FC } from "react";

import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

import styles from './login.module.css';

interface ILogin {
    handleChange: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => void,
    handleRequest: () => void
    errorMessage: any
}

const LoginScreen: FC<ILogin> = (props) => {
    return <div className={styles.loginContainer}>
        <div className={`mb-5 ${styles.loginTextHeader}`}>
            <h1>SIGN IN</h1>
        </div>
        <div className={styles.errorBlock}>{props.errorMessage ? props.errorMessage.data.message : ''}</div>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="name@example.com" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="password" onChange={props.handleChange} />
        </Form.Group>
        <Button className="mb-2" onClick={props.handleRequest}>Sign in</Button>
    </div>
}

export default LoginScreen;