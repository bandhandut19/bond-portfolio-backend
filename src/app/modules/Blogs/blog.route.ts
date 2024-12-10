import express from 'express'
import { BlogControllers } from './blog.controller'

const BlogRouter = express.Router()

BlogRouter.post('/blog', BlogControllers.addBlogs)
BlogRouter.get('/blog', BlogControllers.getBlogs)
BlogRouter.delete('/blog:id', BlogControllers.deletBlogs)
BlogRouter.patch('/blog:id', BlogControllers.updateBlogs)

export const BlogRoutes = BlogRouter
