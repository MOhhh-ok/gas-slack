export class SlackClient {
  constructor(
    private readonly params: {
      channelId?: string;
      token?: string;
      webhookUrl?: string;
    }
  ) {}

  sendMessage(text: string) {
    if (this.params.webhookUrl) {
      return this.sendWithWebhook(text);
    }
    return this.sendWithBotToken(text);
  }

  sendWithBotToken(text: string) {
    const data = JSON.stringify({
      channel: this.params.channelId, // 送信先のチャンネルID
      text, // 送信するメッセージ
    });

    return UrlFetchApp.fetch('https://slack.com/api/chat.postMessage', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this.params.token}`,
      },
      payload: data,
    });
  }

  sendWithWebhook(text: string) {
    const data = JSON.stringify({
      text,
    });
    return UrlFetchApp.fetch(this.params.webhookUrl!, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      payload: data,
    });
  }
}
