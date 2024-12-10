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
  console.log(id)
  const result = await Skill.findByIdAndDelete(id)
  return result
}

export const SkillServices = {
  insertSkillIntoDB,
  getSkillsFromDB,
  deleteSkillFromDB,
}
