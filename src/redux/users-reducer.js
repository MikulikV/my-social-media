const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  users: [ // props.setUsers([
    //   {
    //     id: 1,
    //     photoUrl:
    //       "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png",
    //     fullName: "Vadim",
    //     followed: true,
    //     status: "I am front-end developer",
    //     location: { city: "Ufa", country: "Russia" },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png",
    //     fullName: "Dinara",
    //     followed: true,
    //     status: "I am buyer from Turkey",
    //     location: { city: "Istanbul", country: "Turkey" },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png",
    //     fullName: "Violetta",
    //     followed: false,
    //     status: "I am doctor",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    // ])
  ],
  pageSize: 5,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: false,
};

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
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
