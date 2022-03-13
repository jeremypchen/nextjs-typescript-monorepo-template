import cron from 'node-cron'

console.log('Ready for cron jobs...')

// Every hour
cron.schedule(
  '0 * * * *',
  async () => {
    console.log('Running every hour task')

    console.log('Completed every hour task task')
  },
  { timezone: 'America/Los_Angeles' }
)
