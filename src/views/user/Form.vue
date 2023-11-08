<template>
    <div class="container">
        <h1>User Registration</h1>

        <!-- Registration Form -->
        <form>
            <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullName" name="fullName" v-model="userInfo.name" required />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" v-model="userInfo.email" required />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" v-model="userInfo.password" required />
            </div>
            <button v-if="!id" type="button" class="btn btn-primary" @click="createUser">Create</button>
            <button v-if="id" type="button" class="btn btn-primary" @click="updateUser">Update</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { userStore } from '@/stores/userStore';


const route = useRoute();
const userData = userStore();

const { id } = route.params;
const userInfo = reactive({name: "", email: "", password: ""});
if (id) {
    onMounted(async () => {
        const { data, status } = await userData.show(id);
        userInfo.email = data.email;
        userInfo.name = data.name;
    });
}
const updateUser = async() => {
    userInfo.id = id;
    const { data, status } = await userData.update(userInfo);
}
const createUser = async() => {
    const { data, status } = await userData.create(userInfo);
}
</script>

<style scoped></style>
