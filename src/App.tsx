import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {eight, five, four, maxValue, nine, one, remove, seven, six, three, two, zero} from "./containers/counterSlice";

function App() {

  const value = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();
  const password = '1234'
  const onClick = () => {
      if (value === password){
          alert('Right');
      } else {
          alert('Wrong');
      }
  }

  console.log(value)

  return (
    <>
        <div className='container-fluid d-flex flex-column div'>
            <input type="password" className='password' value={value} maxLength={dispatch(maxValue())}/>
            <div className='buttons'>
                <button onClick={() => dispatch(one())}>1</button>
                <button onClick={() => dispatch(two())}>2</button>
                <button onClick={() => dispatch(three())}>3</button>
                <button onClick={() => dispatch(four())}>4</button>
                <button onClick={() => dispatch(five())}>5</button>
                <button onClick={() => dispatch(six())}>6</button>
                <button onClick={() => dispatch(seven())}>7</button>
                <button onClick={() => dispatch(eight())}>8</button>
                <button onClick={() => dispatch(nine())}>9</button>
                <button onClick={() => dispatch(remove())}>X</button>
                <button onClick={() => dispatch(zero())}>0</button>
                <button onClick={onClick}>E</button>
            </div>
        </div>
    </>
  )
}

export default App
