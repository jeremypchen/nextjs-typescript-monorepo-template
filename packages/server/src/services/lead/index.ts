import Lead from '../../lib/database/models/lead'

export const createLead = async (leadData: any) => {
  console.log('creating lead', leadData)

  // TODO hit slack or nodemailer

  const lead = new Lead()
  lead.email_address = leadData.email
  lead.user_type = leadData.userType || null
  lead.metadata = leadData.metadata

  await Lead.query().insert(lead)

  console.log('successfully added lead')
}
