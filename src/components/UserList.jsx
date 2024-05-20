import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchUser, filterUserById } from '@/redux/userPage1Slice';
import DataRender from './DataRender';

const UserList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button variant='contained' onClick={() => dispatch(fetchUser())}>
        Fetch List
      </Button>
      <Button variant='contained' onClick={() => dispatch(filterUserById())}>
        Filter List
      </Button>
      <DataRender />
    </div>
  );
};

export default UserList;
