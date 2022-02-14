import { ADD_IN_HISTORY, SAVE_FORM, SET_CURRENT_FORM } from "./actionsType";

export const saveForm = (data, nextForm, state, currentForm, dispatch) => {
    const newForm = { ...state.form, ...data };
    dispatch({ type: SAVE_FORM, payload: newForm });
    dispatch({ type: ADD_IN_HISTORY, payload: currentForm });
      setTimeout(() => {
      dispatch({ type: SET_CURRENT_FORM, payload: nextForm });
    }, 250);
};

// export const saveForm = (data, nextForm, state, currentForm) => {
//     const newForm = { ...state.form, ...data };
    // dispatch({ type: SAVE_FORM, payload: newForm });
    // dispatch({ type: ADD_IN_HISTORY, payload: currentForm });
    //   setTimeout(() => {
    //   dispatch({ type: SET_CURRENT_FORM, payload: nextForm });
    // }, 250);
// };

// export const saveForm = (data, nextForm, state, currentForm) => (dispatch) => {
//     console.log('In saveForm');
//     const newForm = { ...state.form, ...data };
//     dispatch({ type: SAVE_FORM, payload: newForm });
//     dispatch({ type: ADD_IN_HISTORY, payload: currentForm });
//       setTimeout(() => {
//       dispatch({ type: SET_CURRENT_FORM, payload: nextForm });
//     }, 250);
// };