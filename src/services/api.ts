import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-mnli';
const API_TOKEN = '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'; 

interface AnalysisResult {
  result: 'real' | 'fake';
  confidence: number;
}

export const analyzeNews = async (text: string): Promise<AnalysisResult> => {
  try {
    const response = await axios.post(
      HUGGING_FACE_API_URL,
      {
        inputs: text,
        parameters: {
          candidate_labels: ['real news', 'fake news']
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const { labels, scores } = response.data;
    const realNewsIndex = labels.indexOf('real news');
    const fakeNewsIndex = labels.indexOf('fake news');
    
    const isReal = scores[realNewsIndex] > scores[fakeNewsIndex];
    
    return {
      result: isReal ? 'real' : 'fake',
      confidence: isReal ? scores[realNewsIndex] : scores[fakeNewsIndex]
    };
  } catch (error) {
    console.error('Error analyzing news:', error);
    throw new Error('Error al analizar la noticia. Por favor, intenta de nuevo.');
  }
};