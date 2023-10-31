import { defineStore } from 'pinia'

export const authStore = defineStore({
    namespaced: true,
    id: 'auth',
    state: () => ({
       permissionList: [],
       token:'12345678',
       user: null
    }),
    actions: {
    //    async login(params) {
    //       let url = apiUrl.LOGIN;
    //       const result = await service.post(url, params);
    //       if (result.statusCode && result.statusCode === 200) {
    //          this.token = result.data.data.token;
    //          this.user = result.data.data.user;
    //       }
    //       return result
    //    },
    //    async loginWithProvider(params) {
    //       let url = apiUrl.LOGIN_GOOGLE;
    //       const result = await service.post(url, params);
    //       if (result.statusCode && result.statusCode === 200) {
    //          this.token = result.data.data.token;
    //          this.user = result.data.data.user;
    //       }
    //       return result
    //    },
    //    definePermissionList(item) {
    //       this.permissionList = item;
    //    },
    //    async logout() {
    //       this.token = null;
    //       router.push({ name: 'Login'})
    //    }
    },
 
    getters: {
       isLogin() {
        //   return this.token !== null
       },
    },
    persist: true
 })
 