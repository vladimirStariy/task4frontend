import { FC, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import CustomTable from "../../UI/custom-table/custom.table";
import { useBlockRangeMutation, useGetAccountsQuery, useRemoveRangeMutation, useUnblockRangeMutation } from "../../store/services/account.service";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { logout, selectId } from "../../store/slices/auth.slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks/store";
import { BlockIcon, DeleteIcon, UnblockIcon } from "./icons";


const MainScreen: FC = () => {
    const location = useLocation();

    const id = useSelector(selectId)
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 

    const {data, error, isLoading, refetch} = useGetAccountsQuery('');
    const [removeRange] = useRemoveRangeMutation();
    const [blockRange] = useBlockRangeMutation();
    const [unblockRange] = useUnblockRangeMutation();

    useEffect(() => {
        refetch();
    }, [])

    const handleRemoveRange = async () => {
        if(selected.length === 0) return;
        try {
            await removeRange(selected).unwrap();
            if(id && selected.includes(id)) {
                dispatch(logout())
                navigate('/login')
            } else {
                refetch();
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleBlockRange = async () => {
        if(selected.length === 0) return;
        try {
            await blockRange(selected).unwrap();
            if(id && selected.includes(id)) {
                dispatch(logout())
                navigate('/login')
            } else {
                refetch();
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleUnblockRange = async () => {
        if(selected.length === 0) return;
        try {
            await unblockRange(selected).unwrap();
            refetch();
        } catch (e) {
            console.log(e);
        }
    }

    const [selected, setSelected] = useState<number[]>([]);

    const selectAll = (value: boolean) => {
        if(value && data !== undefined) {
            setSelected(data.map(({id}) => id));
        } else {
            setSelected([]);
        }
    };

    const handleSelect = (value: boolean, id: number) => {
        if(value) {
            setSelected([...selected, id])
        } else {
            setSelected(selected.filter((item) => item !== id))
        }
    }

    return <Container>
        {isLoading ?
            <div>loading...</div> 
            :
            error ? 
                <Navigate to="/login" state={{ from: location }} />
            :
            <>
                <Container className="py-4 px-0 gap-4">
                    <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                        <Button style={{display: 'flex', gap: '4px', alignItems: 'center'}} variant="light" onClick={handleBlockRange}>
                            <BlockIcon />
                            Block
                        </Button>
                        <Button variant="light" onClick={handleUnblockRange}>
                            <UnblockIcon />
                        </Button>
                        <Button variant="danger" onClick={handleRemoveRange}>
                            <DeleteIcon />
                        </Button>
                    </div>
                </Container>
                {data !== undefined ? 
                    <CustomTable 
                        data={data}
                        handleSelect={handleSelect}
                        selectAll={selectAll}
                        selected={selected}
                    /> : 
                    <></>
                }
            </>
        }
    </Container>
}

export default MainScreen;