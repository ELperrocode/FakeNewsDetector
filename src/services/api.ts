const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/winterForestStump/Roberta-fake-news-detector';
const API_TOKEN = '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';//

interface AnalysisResult {
  result: 'real' | 'fake';
  confidence: number;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analyzeNews = async (text: string): Promise<AnalysisResult> => {
  try {
    const truncatedText = text.length > 512 ? text.substring(0, 512) : text;

    let retries = 5;
    while (retries > 0) {
      const response = await fetch(
        HUGGING_FACE_API_URL,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ inputs: truncatedText }),
        }
      );

      const result = await response.json();
      console.log('API Response:', result);

      if (result.error && result.error.includes('currently loading')) {
        console.log(`EL modelo esta cargando ${result.estimated_time} segundos...`);
        await sleep(result.estimated_time * 1000);
        retries--;
      } else {
        if (!result || !result.length || !result[0].length) {
          throw new Error('Invalid response from API');
        }

        const { label, score } = result[0][0];
        const analysisResult = label === 'FAKE' ? 'fake' : 'real';

        return {
          result: analysisResult,
          confidence: score * 100, 
        };
      }
    }

    throw new Error('El modelo esta cargando,intenta de nuevo en unos segundos');
  } catch (error) {
    console.error('Error analizando noticias:', error);
    throw new Error('Error al analizar la noticia. Por favor, intenta de nuevo.');
  }
};