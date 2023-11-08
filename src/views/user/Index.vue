<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <h1>User Table</h1>
      <div class="group-action">
        <router-link to="user/create">New User <i class="fa-solid fa-plus"></i></router-link>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="mb-3 col-2">
          <input
            type="text"
            class="form-control input-group"
            placeholder="Search for users"
            name="userSearch"
          />
        </div>
        <div class="col-2">
          <button class="btn btn-primary" type="submit">Search</button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ ((params.page - 1) * params.per_page) + (++index) }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="`/user/edit/${ user.id  }`"><button class="btn btn-primary btn-sm">Edit</button></router-link>
            <button class="btn btn-danger btn-sm ms-2" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pagination="paginationData" @reloadData="reloadData"></pagination>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/userStore";
import { ref, reactive } from "vue";
import { useRoute } from 'vue-router'
import Pagination from '@/components/Pagination.vue'
const route = useRoute()
const {page, per_page} = route.query
const userStoredata = userStore();

const users = ref([]);



const params = reactive({page: page ?? 1, per_page:per_page ?? 20});
console.log(params)
const paginationData =  reactive({total: 0})


const listUsers = async () => {
  const { data, status } = await userStoredata.fetch(params);
  users.value = data.data;
  paginationData.total = data.total;
};

const reloadData = async ({page, per_page}) => {
  params.page = page
  params.per_page = per_page
  await listUsers()
}

const deleteUser = async(id) => {
  if (!window.confirm('Are you sure?')) {
		return
	}
	await userStoredata.delete(id);
  await listUsers();
}
listUsers();
</script>

<style scoped></style>
