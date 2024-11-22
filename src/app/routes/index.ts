import express from 'express'
import { SkillRoutes } from '../modules/Skills/skills.route'
import { UserRoutes } from '../modules/User/user.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
