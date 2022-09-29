




















<script setup>
import Footer from '../components/Footer.vue';


</script>

<template>

  <div class="html">

    <header class="header">
      <h1>Welcome to our movies hub</h1>
    </header>

    <body class="body">

      <div class="bestRated">

      </div>

      <div class="worstRated">

      </div>

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
  justify-content: center;
  align-items: center;
  grid-area: header;
  height: 13vh;
  background-color: #472D2D;
  color: white;
}

.body {
  grid-area: body;
  height: 110vh;
  background-color: #DCD7C9;
}

.bestRated {
  background-color: red;
  width: 500px;
  height: 50vh;
  top: 10vh;
  left: 400px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px;
}

.worstRated {
  background-color: rgb(177, 146, 146);
  width: 500px;
  height: 50vh;
  left: 700px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px;
}
</style>
