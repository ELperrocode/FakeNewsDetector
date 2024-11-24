const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/winterForestStump/Roberta-fake-news-detector';
const TRANSLATION_API_URL = 'https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-es-en';
const API_TOKEN = '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';

interface AnalysisResult {
  result: 'real' | 'fake';
  confidence: number;
}

const translateText = async (text: string): Promise<string> => {
  const response = await fetch(
    TRANSLATION_API_URL,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: text,
      }),
    }
  );

  const result = await response.json();
  if (result && result[0] && result[0].translation_text) {
    return result[0].translation_text;
  } else {
    throw new Error('Error translating text');
  }
};

export const analyzeNews = async (text: string): Promise<AnalysisResult> => {
  try {
    // Traducir el texto al inglés
    const translatedText = await translateText(text);
    console.log('Translated Text:', translatedText); 

    const response = await fetch(
      HUGGING_FACE_API_URL,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: translatedText }),
      }
    );

    const result = await response.json();
    console.log('API Response:', result);

    if (!result || !result.length || !result[0].length) {
      throw new Error('Invalid response from API');
    }

    const { label, score } = result[0][0];
    const analysisResult = label === 'FAKE' ? 'fake' : 'real';

    return {
      result: analysisResult,
      confidence: score * 100,
    };
  } catch (error) {
    console.error('Error analyzing news:', error);
    throw new Error('Error al analizar la noticia. Por favor, intenta de nuevo.');
  }
};