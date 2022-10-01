




















<script>

import { ref } from 'vue';
import RegisterModal from './RegisterModal.vue';
import LoginModal from './LoginModal.vue';
import { logout } from '../../api/users';

export default {

    setup(props, { emit }) {

        let showLogin = ref(false);
        let showRegister = ref(false);
        const user = JSON.parse(localStorage.getItem('user'));

        const loginAndReRender = () => {
            showLogin = false;
            emit('reRender');
        }

        const logoutAndReRender = () => {
            logout();
            emit('reRender');
        }

        return {
            RegisterModal,
            LoginModal,
            loginAndReRender,
            logoutAndReRender
        }
    }

}



</script>

<template>

    <footer class="footer">
        <router-link to="/" class="links">Home</router-link>
        <router-link to="/catalog" class="links">Catalog</router-link>
        <button v-if="!user" class="modalBtn" @click="showLogin = true">Login</button>
        <button v-if="!user" class="modalBtn" @click="showRegister = true">Register</button>
        <button v-else class="modalBtn" @click="logoutAndReRender">Logout</button>
    </footer>

    <register-modal v-if="showRegister" @close-modal="showRegister = false" />
    <login-modal v-if="showLogin" @close-modal="loginAndReRender" />

</template>

<style scoped>
.footer {
    display: flex;
    grid-area: footer;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    background-color: #472D2D;
}

.links {
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
}

.modalBtn {
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    background: none;
    border: none;
}

.links:hover,
.modalBtn:hover {
    background-color: black;
    border-radius: 5px;
    padding: 1px;
}
</style>