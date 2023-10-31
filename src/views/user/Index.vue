<template>
  <div>
    <h1>User Table</h1>
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
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>
            <button class="btn btn-primary btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm ms-2">Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td>
            <button class="btn btn-primary btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm ms-2">Delete</button>
          </td>
        </tr>
        <!-- Add more user rows here -->
      </tbody>
    </table>
    <nav>
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Prev</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  import { userStore } from '@/stores/userStore';
  import { ref } from 'vue';

  const userStoredata = userStore();

  const users = ref([]);
  const params = ref({});

  const listUsers = async () => { 
    users.value = await userStoredata.fetch(params.value)
  }
  listUsers();
  console.log(users.value);
</script>

<style scoped></style>
