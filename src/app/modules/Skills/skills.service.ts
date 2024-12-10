import { TProject } from '../Projects/project.instance'
import { TSkill } from './skills.interface'
import { Skill } from './skills.model'

const insertSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload)
  return result
}
const getSkillsFromDB = async () => {
  const result = await Skill.find()
  return result
}
const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id)
  return result
}

const updateSkillIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Skill.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true },
  )
  return result
}
export const SkillServices = {
  insertSkillIntoDB,
  getSkillsFromDB,
  deleteSkillFromDB,
  updateSkillIntoDB,
}
