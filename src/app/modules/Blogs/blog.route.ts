import express from 'express'
import { BlogControllers } from './blog.controller'

const BlogRouter = express.Router()

BlogRouter.post('/blog', BlogControllers.addBlogs)
BlogRouter.get('/blog', BlogControllers.getBlogs)
BlogRouter.delete('/blog:id', BlogControllers.deletBlogs)

export const BlogRoutes = BlogRouter
