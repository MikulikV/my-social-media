import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

// Action Creator
export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
});

// Thunk Creator
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email));
    }
  });
};

export default authReducer;
