import { goBack } from "helpers/automateHelper";
import { SET_ANIMATION, ADD_IN_HISTORY, SET_CURRENT_FORM, SAVE_FORM, GO_BACK } from "./actionsType";

function reducer(state, action) {
  switch (action.type) {
    case SET_ANIMATION:
      const { animation } = action.payload;
      return { ...state, animation  };
    case SET_CURRENT_FORM:
      return { ...state, currentForm : action.payload, animation: 'animate-fade-in-down'  };
    case SAVE_FORM:
      return { ...state, form: action.payload  };
    case GO_BACK:
      console.log('state', state);
      const { currentForm, formPile } = goBack(state);
      return {...state, currentForm, formPile };
    case ADD_IN_HISTORY:
      return { ...state, formPile: [...state.formPile, action.payload], animation: 'animate-fade-in-out' };
    default:
      return state;
  }
}

export default reducer;