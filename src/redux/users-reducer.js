const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
