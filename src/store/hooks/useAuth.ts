import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser, selectToken } from '../slices/auth.slice';

export const useAuth = () => {
  const name = useSelector(selectCurrentUser)
  const token = useSelector(selectToken);
  return useMemo(() => ({ name, token }), [name, token])
}