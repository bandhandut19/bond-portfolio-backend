import express from 'express'
import { SkillRoutes } from '../modules/Skills/skills.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/skills',
    route: SkillRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
