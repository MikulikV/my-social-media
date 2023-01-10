import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

// Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USERS_TOTAL_COUNT:
      return { ...state, usersTotalCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// Action Creators
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//Thunk Creators
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.data.items));
      dispatch(setUsersTotalCount(response.data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollowUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
