import { BotClient } from './BotClient';

export * from './BotClient';

function test() {
  const pro = PropertiesService.getScriptProperties();
  const channelId = pro.getProperty('CHANNEL_ID') as string;
  const token = pro.getProperty('BOT_TOKEN') as string;
  const test = new BotClient({ channelId, token });
  test.sendMessage('test');
}
