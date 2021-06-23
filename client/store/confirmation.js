import axios from "axios";

// I am not sure What I am doing here...

//ACTION NAME
const ORDER_FULFILLED = "ORDER_FULFILLED";
//ACTION CREATORS
const orderFulfilled = (id) => {
  return {
    type: ORDER_FULFILLED,
    id,
  };
};

//THUNK ACTIONS
export const fulfillOrder = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${id}/confirmation`, id);
      dispatch(orderFulfilled(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const intialState = {};
//REDUCER
export default function cartReducer(state = intialState, action) {
  switch (action.type) {
    case ORDER_FULFILLED:
      return { ...state, id: action.id };
    default:
      return state;
  }
}
