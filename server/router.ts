import { Router } from 'express'

const router = Router()

router.use('/', (req, res) => {
  res.json({ message: `hi there!` })
})

export default router
