import app from './app'
import config from './app/config'
import mongoose from 'mongoose'
import { seedAdmin } from './app/Utils/seedAdmin'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    //initially an admin will be stored in the database
    // seedAdmin()
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
main()
