import { FC, useState, useCallback } from 'react'

import { useAppDispatch } from '../../store/hooks/store';
import { useNavigate } from 'react-router-dom';
import { ILoginRequest, IRegisterRequest } from '../../store/models/IAccount';
import { useLoginMutation, useRegistrationMutation } from '../../store/services/account.service';
import { setCredentials } from '../../store/slices/auth.slice';

import Registration from './registration';
import LoginScreen from './login.screen';

import styles from './auth.screen.module.css';

const AuthScreen: FC = () => {
    const [currentAction, setCurrentAction] = useState<string>('login');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formState, setFormState] = useState<IRegisterRequest>({email: '', password: '', name: ''})

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

    const handleChangeAction = (action: string) => {
        setCurrentAction(action);
        setFormState({email: '', name: '', password: '',});
    }

    const [login, {error: loginError, isLoading: loginIsLoading}] = useLoginMutation();
    const [registration, {error: registerError, isLoading: registerIsLoading}] = useRegistrationMutation();

    const loginRequest = async () => {
        try {
            const user = await login(formState).unwrap();
            dispatch(setCredentials(user));
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    const registerRequest = async () => {
        try {
            const user = await registration(formState).unwrap();
            dispatch(setCredentials(user));
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return <div className={styles.container}>
        
        {currentAction === 'login' ? 
            <>
                <LoginScreen errorMessage={loginError} handleChange={handleChange} handleRequest={loginRequest} />
                <div style={{cursor: 'pointer'}} onClick={() => handleChangeAction('register')}>Dont have an account? Sign up!</div>
            </>
            :
            <>
                <Registration errorMessage={registerError} handleChange={handleChange} handleRequest={registerRequest} />
                <div style={{cursor: 'pointer'}} onClick={() => handleChangeAction('login')}>Already registered? Sign in!</div>
            </>
        }
    </div>
}

export default AuthScreen;