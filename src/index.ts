import { BotClient } from './BotClient';

export * from './BotClient';

function test() {
  const pro = PropertiesService.getScriptProperties();
  const channelId = pro.getProperty('CHANNEL_ID') as string;
  const token = pro.getProperty('BOT_TOKEN') as string;
  const test = new BotClient({ channelId, token });
  const res = test.sendMessage('test');
  console.log(res.getResponseCode());
  console.log(res.getContentText());
}
