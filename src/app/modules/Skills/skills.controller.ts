/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'
import { SkillServices } from './skills.service'

const insertSkill = async (req: Request, res: Response) => {
  const payload = req.body
  try {
    const result = await SkillServices.insertSkillIntoDB(payload)
    if (result) {
      return res.status(201).json({
        message: 'Skill added successfully',
        data: result,
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
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while retriving skills from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
const deleteSkills = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await SkillServices.deleteSkillFromDB(id)
    if (result) {
      return res.status(201).json({
        message: 'Skill Deleted successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while deleting skill from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
const updateSkills = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const payload = req.body
    const result = await SkillServices.updateSkillIntoDB(id, payload)
    if (result) {
      return res.status(201).json({
        message: 'Skill Updated successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while updating skill from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const SkillController = {
  insertSkill,
  getSkills,
  deleteSkills,
  updateSkills,
}
