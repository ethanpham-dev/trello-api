/*eslint-disable no-console*/
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB} from '~/config/mongodb'
import { env } from '~/config/environment'


const START_SERVER = async () => {
  const app = express()

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3 .Hello ${env.AUTHOR}, BE-server is running successfully at Host: ${env.APP_HOST}:${env.APP_PORT}`)
  })

  exitHook(async () => {
    console.log('4. Server is shutting down...')
    CLOSE_DB()
    console.log('5. Server is shut down successfully!')
  })

}

(async () => {
  try {
    console.log('1. Connecting to database...')
    await CONNECT_DB()
    console.log('2. Database connected successfully!')
    await START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()