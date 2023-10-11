import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/store';
import { getCredentials, selectName, selectToken, setCredentials } from '../../store/slices/auth.slice';
import { useSelector } from 'react-redux';
import AuthScreen from '../login-screen/auth.screen';
import MainScreen from '../main-screen/main.screen';
import AppNavbar from '../navbar/navbar';

const AppRouter = () => {
    const dispatch = useAppDispatch();
    const name = useSelector(selectName);

    useEffect(() => {
        dispatch(getCredentials())
    }, [])

    return <>
        <AppNavbar auth={name} />
        <Routes>
            <Route path='/login' element={<AuthScreen />}/>
            <Route path='/' element={<MainScreen />} />
        </Routes>
    </> 
}

export default AppRouter;