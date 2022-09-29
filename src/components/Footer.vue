




















<template>

    <footer class="footer">
        <router-link to="/" class="links">Home</router-link>
        <router-link to="/catalog" class="links">Catalog</router-link>
        <router-link to="/login" class="links">Login</router-link>
        <router-link to="/register" class="links">Register</router-link>
    </footer>

</template>

<style scoped>
.footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    background-color: #222831;
}

.links {
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
}
</style>