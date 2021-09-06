import express from 'express'
import {
    authUsers,
    getUserProfile,
    registerUser,
    updateUserProfile,
  
  } from '../controllers/userController.js'
import { protect } from '../meddleware/authMiddleware.js'


const router = express.Router()

router.route('/').post(registerUser)

router.post('/login',authUsers)

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router