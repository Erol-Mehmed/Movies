<script setup>
import { ref } from 'vue'
import { addCourse } from '~/api/data'

const user = JSON.parse(localStorage.getItem('user'))
const curCourse = JSON.parse(localStorage.getItem('curCourse'))
const currentUser = user.data.userData.username

const courseName = ref(null)
const description = ref(null)
const courseDuration = ref(null)
const location = ref(null)
const price = ref(null)
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <font-awesome-icon :icon="['fas', 'circle-xmark']" class="closeIcon" @click="$emit('close-modal')" />

      <div class="header">
        <h2>Add course information</h2>
      </div>

      <div class="body">
        <form @submit.prevent>
          <div class="courseName">
            <label>Course Name:</label>
            <input v-model.trim.lazy="courseName" name="courseName" type="text" required
              placeholder="Enter course name" />
          </div>
          <div class="description">
            <label>Description:</label>
            <input v-model.trim.lazy="description" name="description" type="text" placeholder="Enter description"
              required />
          </div>
          <div class="courseDuration">
            <label>Course duration:</label>
            <input v-model.trim.lazy="courseDuration" name="courseDuration" type="string" required
              placeholder="Enter course duration" />
          </div>
          <div class="location">
            <label>Location:</label>
            <input v-model.trim.lazy="location" name="location" type="string" required
              placeholder="Enter course location" />
          </div>
          <div class="price">
            <label>Price:</label>
            <input v-model.number.lazy="price" name="price" type="number" placeholder="Enter price" required />
          </div>
          <button class="submitBtn" type="submit" @click="
            addCourse(
              curCourse.creatorId,
              currentUser,
              courseName,
              description,
              courseDuration,
              location,
              price
            )
            $emit('reRender')
          " v-if="
            courseName && description && courseDuration && location && price
          ">
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

.courseName,
.description,
.courseDuration,
.price {
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
