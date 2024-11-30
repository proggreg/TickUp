import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    // Handle webhook payload
    console.log('Received webhook:', body)
    
    return {
      status: 'success',
      message: 'Webhook received'
    }
  } catch (error) {
    console.error('Webhook error:', error)
    
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})
