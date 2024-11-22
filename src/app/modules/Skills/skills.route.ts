import express from 'express'
import { SkillController } from './skills.controller'

const SkillRouter = express.Router()

SkillRouter.post('/skill', SkillController.insertSkill)
SkillRouter.get('/skill', SkillController.getSkills)

export const SkillRoutes = SkillRouter
