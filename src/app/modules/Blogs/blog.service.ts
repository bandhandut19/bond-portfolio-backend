import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const addBlogsIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload)
  return result
}

const getBlogsFromDB = async () => {
  const result = await Blog.find()
  return result
}

const deleteBlogsFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

export const BlogServices = {
  addBlogsIntoDB,
  getBlogsFromDB,
  deleteBlogsFromDB,
}
