const express = require('express')
const cors = require('cors')
const bycrypt = require('bcryptjs') 
const { connectToDb, getDb } = require('./db')

// init app

const app = express()
app.use(express.json())
app.use(cors())

// db connection

let db

connectToDb((err) => {
    if(!err){
        app.listen(8000, () => {
            console.log('App listening on port 8000');
        })
    }
    db = getDb()
})

// routes

// Get all students detail
app.get('/students',(req, res) => {
    let students = []
    db.collection('sem_sgpa')
      .find()
      .sort({roll_no: 1})
      .forEach(student => students.push(student))
      .then(() => {
        res.status(200).json(students)
      })
      .catch(() => {
        res.status(500).json({err: 'Could not fetch student result'})
      })
})

// Get particular student detail
app.get('/students/:id', (req,res) => {
    db.collection('sem_sgpa')
      .findOne({roll_no: req.params.id})
      .then(doc => {
        if(doc)
            res.status(200).json(doc)
        else
            res.json({Error: "Invalid roll no"})
      })
      .catch(() => {
        res.status(500).json({err: 'Could not fetch student detail'})
      })
})

// Add student detail
app.post('/students', (req,res) => {
    const student = req.body

    db.collection('sem_sgpa')
      .insertOne(student)
      .then(result => {
        res.status(201).json(result)
      })
      .catch(() => {
        res.status(500).json({err: 'Could not add student detail'})
      })
})

// Delete a student detail
app.delete('/students/:id', (req,res) => {
    db.collection('sem_sgpa')
      .deleteOne({roll_no: req.params.id})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(() => {
        res.status(500).json({err: 'Could not delete student detail'})
      })
})

// Update a student detail
app.patch('/students/:id', (req,res) => {
    const updates = req.body
    db.collection('sem_sgpa')
      .updateOne({roll_no: req.params.id}, {$set: updates})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(() => {
        res.status(500).json({err: 'Could not update student detail'})
      })
})

// Admin and Authentication

// Adding an user
app.post('/users/reg', async (req,res) => {

  try{

    const user = req.body.user
    const password = await bycrypt.hash(req.body.password, 10)

    const currentUser = {
      "user": user,
      "password": password
    }

    db.collection('user')
      .insertOne(currentUser)
      .then(result => {
        res.status(201).json(result)
      })
      .catch(() => {
        res.status(500).json({err: 'Could not add an user'})
      })

  }
  catch(err){
    res.status(500).json({err: 'Could not hash user password'})
  }

})
  

// Getting an user
app.post('/users/login', async (req,res) => {

  try{

    const user = await db.collection('user').findOne({user: req.body.user})

    if(!user) { res.status(500).json({err: 'Invalid User'})}
    
    const isPasswordValid = await bycrypt.compare(req.body.password, user.password)
    
    if(isPasswordValid)
      res.status(200).json({msg: 'Correct Password'})
    else
      res.json({err: 'Incorrect Password'})
  }
  catch(err){
    res.status(500).json({err: 'Invalid login credentials!'})
  }

})

  

  