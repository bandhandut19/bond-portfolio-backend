import { model, Schema } from 'mongoose'
import { TSkill } from './skills.interface'
import { Skills } from './skills.constant'

const skillSchema = new Schema<TSkill>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(Skills),
      required: true,
    },
    description: {
      type: String,
    },
    level: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

export const Skill = model<TSkill>('skill', skillSchema)
