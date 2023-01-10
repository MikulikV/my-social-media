import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d82cd382-fe9c-4564-bdda-c2a09618ba3d",
  },
});

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  },
};

