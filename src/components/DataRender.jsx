import { useSelector } from 'react-redux';

const DataRender = () => {
  const userList = useSelector((store) => store.userPage1Reducer.users);
  return <p>{JSON.stringify(userList)}</p>;
};

export default DataRender;
