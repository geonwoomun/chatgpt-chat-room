import { Configuration, OpenAIApi } from 'openai';

class OpenAI {
  private _apiKey: string | null;
  private openAI: OpenAIApi | null;

  constructor() {
    this.openAI = null;
    this._apiKey = null;
  }

  get apiKey() {
    return this._apiKey;
  }

  setInstance(apiKey: string) {
    const configuration = new Configuration({
      organization: 'org-w9QQmOR8mQAdGCSx6Wdg664e',
      apiKey: apiKey,
    });

    this._apiKey = apiKey;
    this.openAI = new OpenAIApi(configuration);
  }

  requestPrompt(prompt: string) {
    if (!this.openAI) {
      throw new Error('Please set OpenAPI API key');
    }

    return this.openAI.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  }
}

const OpenAiInstance = new OpenAI();

export default OpenAiInstance;
