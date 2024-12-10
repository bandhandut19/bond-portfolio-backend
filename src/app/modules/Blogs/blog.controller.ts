/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { BlogServices } from './blog.service'

const addBlogs = async (req: Request, res: Response) => {
  const payload = req.body
  try {
    const result = await BlogServices.addBlogsIntoDB(payload)
    if (result) {
      return res.status(201).json({
        message: 'Blog added successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while inserting blog into database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}
const getBlogs = async (req: Request, res: Response) => {
  try {
    const result = await BlogServices.getBlogsFromDB()
    if (result) {
      return res.status(201).json({
        message: 'Blogs retrived successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while retriving blogs from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}
const deletBlogs = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await BlogServices.deleteBlogsFromDB(id)
    if (result) {
      return res.status(201).json({
        message: 'Blog deleted successfully',
        data: result,
      })
    } else {
      return res.status(500).json({
        error: 'An error occured while deleting blog from database',
      })
    }
  } catch (err: any) {
    return res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}

export const BlogControllers = {
  addBlogs,
  getBlogs,
  deletBlogs,
}
