import mongoose from 'mongoose'

import gradeModel from './gradeModel'

const db = {}

db.url = process.env.MONGODB
db.mongoose = mongoose
db.grade = gradeModel(mongoose)

export { db }
