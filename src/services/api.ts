const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/winterForestStump/Roberta-fake-news-detector';
const API_TOKEN = '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';

interface AnalysisResult {
  result: 'real' | 'fake';
  confidence: number;
}

export const analyzeNews = async (text: string): Promise<AnalysisResult> => {
  try {
    const response = await fetch(
      HUGGING_FACE_API_URL,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: text }),
      }
    );

    const result = await response.json();
    console.log('API Response:', result); // Agregar console.log para depuración

    if (!result || !result.length || !result[0].length) {
      throw new Error('Invalid response from API');
    }

    const { label, score } = result[0][0];
    const analysisResult = label === 'FAKE' ? 'fake' : 'real';

    return {
      result: analysisResult,
      confidence: score * 100, // Convertir a porcentaje
    };
  } catch (error) {
    console.error('Error analyzing news:', error);
    throw new Error('Error al analizar la noticia. Por favor, intenta de nuevo.');
  }
};