import { model, Schema } from 'mongoose'
import { TBlog } from './blog.interface'

const BlogSchema = new Schema<TBlog>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

export const Blog = model<TBlog>('blog', BlogSchema)
