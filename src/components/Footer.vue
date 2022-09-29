




















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

.links:hover {
    background-color: black;
    border-radius: 5px;
    padding: 1px;
}

</style>