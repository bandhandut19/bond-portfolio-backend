import { TProject } from './project.instance'
import { Project } from './project.model'

const addProjectsIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload)
  return result
}
const getProjectsFromDB = async () => {
  const result = await Project.find()
  return result
}
const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id)
  return result
}

const updateProjectsIntoDB = async (payload: Partial<TProject>, id: string) => {
  const result = await Project.findByIdAndUpdate(
    id,
    {
      $set: payload,
    },
    {
      new: true,
    },
  )
  return result
}

export const ProjectServices = {
  addProjectsIntoDB,
  getProjectsFromDB,
  updateProjectsIntoDB,
  deleteProjectFromDB,
}
