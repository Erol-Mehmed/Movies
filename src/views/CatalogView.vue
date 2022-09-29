




















<script setup>
import Footer from '../components/Footer.vue';

</script>

<template>

    <div class="html">

        <header class="header">
            <h1>Catalog</h1>
        </header>

        <body class="body">

        </body>

        <Footer />

    </div>

</template>

<style scoped>
.html {
    display: grid;
    grid-template-areas:
        "header"
        "body"
        "footer";
}

.header {
    display: flex;
    background-color: #472D2D;
    height: 13vh;
    color: white;
    grid-area: header;
}

.body {
    grid-area: body;
    background-color: #DCD7C9;
    
}


</style>