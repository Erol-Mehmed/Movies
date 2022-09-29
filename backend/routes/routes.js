const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Register } = require('../models/register')
const { Login } = require('../models/login')
const { Courses } = require('../models/courses')
const saltRounds = 10

module.exports = router

// Register User Method

router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(req.body.password, salt)

  const user = new Register({
    username: req.body.username,
    password: hash,
  })

  try {
    const dataToSave = await user.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Login User Method

router.post('/login', async (req, res) => {
  try {
    // check if username exists
    const user = await Login.findOne({ username: req.body.username })

    // compare the password entered and the hashed password found
    const isMatched = await bcrypt.compare(req.body.password, user.password)

    if (!isMatched) {
      return res.status(400).send('Passwords does not match')
    }

    //   create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    //   return success response
    res.status(200).send({
      message: 'Login Successful',
      userData: user,
      token,
    })
  } catch (error) {
    res.status(404).send({
      message: 'Username not found',
      error,
    })
  }
})

// Get All Courses Method

router.get('/courses', async (req, res) => {
  try {
    const data = await Courses.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add New Course Method

router.post('/addCourse', async (req, res) => {
  const course = new Courses({
    creatorId: req.body.creatorId,
    creatorName: req.body.creatorName,
    courseName: req.body.courseName,
    description: req.body.description,
    courseDuration: req.body.courseDuration,
    location: req.body.location,
    price: req.body.price,
  })
  try {
    const dataToSave = await course.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Edit by ID Method

router.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateData = req.body

    const result = await Courses.findByIdAndUpdate(id, updateData)

    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete by ID Method

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Courses.findByIdAndDelete(id)

    res.send(`Document has been deleted.`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})
