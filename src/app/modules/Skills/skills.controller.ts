import { Request, Response } from 'express'
import { SkillServices } from './skills.service'

const insertSkill = async (req: Request, res: Response) => {
  const payload = req.body
  try {
    const result = await SkillServices.insertSkillIntoDB(payload)
    if (result) {
      return res.status(201).json({
        message: 'Skill added successfully',
        skill: result,
      })
    } else {
      return res
        .status(500)
        .json({ error: 'An error occured while inserting skill into database' })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
const getSkills = async (req: Request, res: Response) => {
  try {
    const result = await SkillServices.getSkillsFromDB()
    if (result) {
      return res.status(201).json({
        message: 'Skills retrived successfully',
        skill: result,
      })
    } else {
      return res
        .status(500)
        .json({
          error: 'An error occured while retriving skills from database',
        })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const SkillController = {
  insertSkill,
  getSkills,
}
