import axios from 'axios'

export async function addCourse(
  creatorId,
  creatorName,
  courseName,
  description,
  courseDuration,
  location,
  price
) {
  const courseObj = {
    creatorId,
    creatorName,
    courseName,
    description,
    courseDuration,
    location,
    price
  }

  await axios.post('http://localhost:3100/api/addCourse', courseObj)
}

export async function editCourse(curCourseId, course) {
  await axios.put(`http://localhost:3100/api/update/${curCourseId}`, {
    courseName: course.courseName,
    courseDuration: course.courseDuration,
    description: course.description,
    location: course.location,
    price: course.price,
  })
}

export async function deleteCourse(curCourseId) {
  await axios.delete(`http://localhost:3100/api/delete/${curCourseId}`)
}
