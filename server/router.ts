import { Router } from 'express'
import drivers from 'drivers'

const router = Router()

router.use('/', (req, res) => {
  res.json(drivers)
})

export default router
