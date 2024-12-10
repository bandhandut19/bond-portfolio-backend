import express from 'express'
import { SkillController } from './skills.controller'

const SkillRouter = express.Router()

SkillRouter.post('/skill', SkillController.insertSkill)
SkillRouter.get('/skill', SkillController.getSkills)
SkillRouter.delete('/skill/:id', SkillController.deleteSkills)
SkillRouter.patch('/skill/:id', SkillController.updateSkills)

export const SkillRoutes = SkillRouter
