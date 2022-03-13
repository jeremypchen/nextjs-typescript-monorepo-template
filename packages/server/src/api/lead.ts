import { LeadService } from '../services'
import express, { Router } from 'express'

const router = Router()

router.post('/lead', async (req: express.Request, res: express.Response) => {
  const leadData = {
    email: req.body.email,
    userType: req.body.userType,
    metadata: req.body.metadata,
  }

  try {
    await LeadService.createLead(leadData)
  } catch (err) {
    console.error(
      `Error occurred while creating lead ${JSON.stringify(
        leadData,
        null,
        2
      )}: ${err}`
    )
  }

  res.send({ message: 'Success' })
})

export default router
