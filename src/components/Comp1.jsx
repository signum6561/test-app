import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '@/redux/colorSlice';

const Comp1 = () => {
  const dispatch = useDispatch();
  const color = useSelector((store) => store.colorReducer.color);

  return (
    <div>
      <h1 style={{ color: color }}>Component 1</h1>
      <button onClick={() => dispatch(changeColor())}>Change text color</button>
      <button>Hello</button>
    </div>
  );
};

export default Comp1;
