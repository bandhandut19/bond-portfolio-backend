import express from 'express'
import { ProjectControllers } from './project.controller'
const ProjectRouter = express.Router()

ProjectRouter.post('/project', ProjectControllers.insertProject)
ProjectRouter.get('/project', ProjectControllers.getProjects)
ProjectRouter.delete('/project', ProjectControllers.deleteProject)
ProjectRouter.patch('/project', ProjectControllers.updateProject)
