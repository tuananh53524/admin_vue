import { defineStore } from "pinia";
import request from "@/utils/request";

export const userStore = defineStore("UserStore", {
  actions: {
    // Fetch users
    async fetch(params) {
      return await request.get("/users", { params });
    },

    // Fetch single role
    show(id) {
      return new Promise((resolve, reject) => {
        request
          .get(`/users/${id}`)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },

    // Create role
    create(params) {
      return new Promise((resolve, reject) => {
        request
          .post("/users", params)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },

    // Update role
    update(params) {
      return new Promise((resolve, reject) => {
        request
          .post(`/users/${params.id}`, params)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },

    // Delete role
    delete(id) {
      return new Promise((resolve, reject) => {
        request
          .delete(`/users/${id}`)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
});
