// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OpenAiInstance from '@/shared/api/openApi';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  text: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const { apiKey, text } = JSON.parse(req.body);
    OpenAiInstance.setInstance(apiKey);
    const response = await OpenAiInstance.requestPrompt(text);
    res.status(200).json({ text: response.data.choices[0].text || 'error' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ text: 'Internal Server Error' });
  }
}
