




















<script setup>
import Footer from '../components/Footer.vue';

const name = 'Erol';

</script>

<template>

  <div class="html">

    <header class="header">
      <h1>Welcome to our movies hub.</h1>
      <h3>Here you can see other users favorite
        movies and you can add your list as well.</h3>
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
  flex-direction: column;
  align-items: center;
  grid-area: header;
  height: 13vh;
  background-color: #222831;
}

.header h1 {
  color: white;
}
.header h3 {
  color: white;
}

.body {
  grid-area: body;
  height: 80vh;
  background-color: rgb(242, 238, 233);
}

.footer {
  grid-area: footer;
}
</style>
