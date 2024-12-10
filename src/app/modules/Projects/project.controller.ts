/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { ProjectServices } from './project.service'

const insertProject = async (req: Request, res: Response) => {
  const payload = req.body
  try {
    const result = await ProjectServices.addProjectsIntoDB(payload)
    if (result) {
      return res.status(201).json({
        message: 'Project added successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while inserting project into database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
const getProjects = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.getProjectsFromDB()
    if (result) {
      return res.status(201).json({
        message: 'Projects retirved successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while retirving project from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await ProjectServices.deleteProjectFromDB(id)
    if (result) {
      return res.status(201).json({
        message: 'Project deleteted successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while deleting project from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params
  const payload = req.body
  try {
    const result = await ProjectServices.updateProjectsIntoDB(payload, id)
    if (result) {
      return res.status(201).json({
        message: 'Project updated successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while updating project from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
export const ProjectControllers = {
  insertProject,
  deleteProject,
  updateProject,
  getProjects,
}
