import { Application, Router } from '@cfworker/web';
import createTelegrafMiddleware from 'cfworker-middleware-telegraf';
import bot from './bot';

const router = new Router();

router.post('/bot', createTelegrafMiddleware(bot));

router.get('/webhook', async (ctx) => {
  const botUrl = ctx.req.url.origin + '/bot';
  console.log('botUrl:', botUrl)
  await bot.telegram.setWebhook(botUrl);
  ctx.res.body = `set webhook successfully! ${botUrl}`;
});

router.get('/', (ctx) => {
  ctx.res.body = "Hello TgBot";
})

new Application().use(router.middleware).listen();

