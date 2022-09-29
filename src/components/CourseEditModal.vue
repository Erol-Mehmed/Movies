<script>
import { ref } from 'vue'
import { addCourse } from '~/api/data'
import { editCourse } from '~/api/data'

export default {
  props: ['courseInfo'],
  setup(props, context) {
    const data = props.courseInfo
    const courseName = ref(data.courseName)
    const description = ref(data.description)
    const courseDuration = ref(data.courseDuration)
    const location = ref(data.location)
    const price = ref(data.price)

    const user = JSON.parse(localStorage.getItem('user'))
    const currentUser = user.data.userData.username
    const addCourseAndReRender = (
      currentUser,
      courseName,
      description,
      courseDuration,
      location,
      price
    ) => {
      addCourse(
        currentUser,
        courseName,
        description,
        courseDuration,
        location,
        price
      )

      context.emit('reRender')
    }

    return {
      editCourse,
      currentUser,
      addCourseAndReRender,
      data,
      courseName,
      description,
      courseDuration,
      location,
      price,
    }
  },
}
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <font-awesome-icon
        :icon="['fas', 'circle-xmark']"
        class="closeIcon"
        @click="$emit('close-modal')"
      />

      <div class="header">
        <h2>Edit course information</h2>
      </div>

      <div class="body">
        <form @submit.prevent>
          <div class="courseName">
            <label>Course Name:</label>
            <input
              v-model.trim.lazy="courseName"
              name="courseName"
              type="text"
              required
            />
          </div>
          <div class="description">
            <label>Description:</label>
            <input
              v-model.trim.lazy="description"
              name="description"
              type="text"
              required
            />
          </div>
          <div class="courseDuration">
            <label>Course duration:</label>
            <input
              v-model.trim.lazy="courseDuration"
              name="courseDuration"
              type="string"
              required
            />
          </div>
          <div class="location">
            <label>Location:</label>
            <input
              v-model.trim.lazy="location"
              name="location"
              type="string"
              required
            />
          </div>
          <div class="price">
            <label>Price:</label>
            <input
              v-model.number.lazy="price"
              name="price"
              type="number"
              required
            />
          </div>
          <button
            class="submitBtn"
            type="submit"
            @click="
              editCourse(data._id, {
                currentUser,
                courseName,
                description,
                courseDuration,
                location,
                price,
              })
              $router.push('/ViewLearningAdditional')
            "
            v-if="
              courseName && description && courseDuration && location && price
            "
          >
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
