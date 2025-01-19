export class BotClient {
  constructor(private readonly params: { channelId: string; token: string }) {}

  sendMessage(text: string) {
    const data = JSON.stringify({
      channel: this.params.channelId, // 送信先のチャンネルID
      text, // 送信するメッセージ
    });

    const res = UrlFetchApp.fetch('https://slack.com/api/chat.postMessage', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.params.token}`,
      },
      payload: data,
    });
  }
}
