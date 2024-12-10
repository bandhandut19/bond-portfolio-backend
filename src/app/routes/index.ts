import express from 'express'
import { SkillRoutes } from '../modules/Skills/skills.route'
import { UserRoutes } from '../modules/User/user.route'
import { BlogRoutes } from '../modules/Blogs/blog.route'
import { ProjectRoutes } from '../modules/Projects/project.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
