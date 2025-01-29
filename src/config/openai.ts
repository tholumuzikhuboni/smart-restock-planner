import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true // Enable client-side usage
});

export default openai;