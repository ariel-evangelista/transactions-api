import { app } from './app'
import { env } from './env'
import { logs } from './middlewares/logs'

app.addHook('preHandler', logs)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
