import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/redux/userPageSlice';
import { filterUser } from '@/redux/userPageSlice';
import { Button } from '@mui/material';

const Comp2 = () => {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.userPageReducer.users);

  return (
    <div>
      <Button variant='contained' onClick={() => dispatch(fetchUser())}>
        Fetch UserList
      </Button>
      <Button variant='contained' onClick={() => dispatch(filterUser())}>
        Filter User
      </Button>
      {JSON.stringify(userList)}
    </div>
  );
};

export default Comp2;
