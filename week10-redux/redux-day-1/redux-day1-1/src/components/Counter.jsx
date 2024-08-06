// import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, INCREMENT } from "../redux/actions";


const Counter = (props) => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Redux Counter</h2>
      <button
        onClick={() =>
          dispatch({
            type: INCREMENT,
            payload: 10,
          })
        }
      >
        {" "}
        +{" "}
      </button>
      {count}
      <button onClick={() => dispatch(decrement(5))}> - </button>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     count: state.counterReducer.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: () =>
//       dispatch({
//         type: INCREMENT,
//         payload: 10,
//       }),
//     minus: () => dispatch(decrement(5)),
//   };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

export default Counter;
