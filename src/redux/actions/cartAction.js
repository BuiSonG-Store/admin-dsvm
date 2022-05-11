import ACTIONS from './index'

export const getTotalCart = (total) => async (dispatch) => {
  try {
    dispatch({
        type: ACTIONS.GET_TOTAL_CART,
        payload: total,
      });
  } catch (error) {
    console.log(error);
  }
};