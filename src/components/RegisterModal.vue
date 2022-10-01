




















<script>
import { ref } from 'vue';
import { login, register } from '../../api/users';

export default {
  setup(props, context) {

    const username = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const checkAndRegister = async (username, password, confirmPassword) => {
      if (password !== confirmPassword) {
        alert('Passwords does not match!')
      } else {
        await register(username, password)
        await login(username, password)
        context.emit('close-modal')
      }
    }

    return {
      checkAndRegister,
      username,
      password,
      confirmPassword
    }
  },
}
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <font-awesome-icon :icon="['fas', 'circle-xmark']" 
      class="closeIcon" @click="$emit('close-modal')" />

      <div class="header">
        <h2>Register</h2>
      </div>

      <div class="body">
        <form @submit.prevent>
          <div class="username">
            <label>Username:</label>
            <input v-model.trim.lazy="username" name="username" type="text" required placeholder="Enter username" />
          </div>
          <div class="password">
            <label>Password:</label>
            <input v-model.trim.lazy="password" name="password" type="password" placeholder="Enter password" required />
          </div>
          <div class="confirmPassword">
            <label>Confirm Password:</label>
            <input v-model.trim.lazy="confirmPassword" name="confirmPassword" type="password" required
              placeholder="Confirm Password" />
          </div>
          <button class="submitBtn" type="submit" @click="checkAndRegister(username, password, confirmPassword)"
            v-if="username && password && confirmPassword">
            Submit
          </button>
          <button class="submitBtn" type="submit" v-else>Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #928f8fda;
}

.modal {
  text-align: center;
  background-color: bisque;
  height: 60vh;
  width: 500px;
  margin-top: 10%;
  border: solid 5px black;
  border-radius: 20px;
}

.header {
  border-bottom: solid 3px black;
  margin-bottom: 30px;
}

.closeIcon {
  font-size: 1.3rem;
  color: black;
  margin-left: 455px;
  margin-top: 5px;
  margin-bottom: 0;
  cursor: pointer;
}

.username,
.password,
.confirmPassword {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submitBtn {
  cursor: pointer;
}

label {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}

input {
  height: 3vh;
}
</style>
