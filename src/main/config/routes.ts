import { Express, Router } from 'express'
import fg from 'fast-glob'

const FILES_ROUTES = '**/src/main/routes/**routes.ts'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  fg.sync(FILES_ROUTES).map(async file => {
    (await import(`../../../${file}`)).default(router)
  })
}
