import { model, Schema } from 'mongoose'
import { TProject } from './project.instance'

const ProjectSchema = new Schema<TProject>({
  name: {
    type: String,
    required: true,
  },
  live_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  github_url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

export const Project = model<TProject>('project', ProjectSchema)
