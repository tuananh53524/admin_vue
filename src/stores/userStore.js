import { defineStore } from "pinia";
import request from "@/utils/request";
// import axios from "axios";

export const userStore = defineStore("UserStore", {
  actions: {
    // Fetch users
    async fetch(params) {
      return await request.get("/users", { params });
    },

    // Fetch single role
    show(id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/users/${id}`)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },

    // Create role
    create(params) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users", params)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },

    // Update role
    update(params) {
      return new Promise((resolve, reject) => {
        axios
          .put(`/users/${params.id}`, params)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },

    // Delete role
    delete(id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/users/${id}`)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
});
